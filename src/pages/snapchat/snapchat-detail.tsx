import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {snapPoint} from 'react-native-redash';
import {SharedElement} from 'react-navigation-shared-element';

import {SnapchatStoryModel} from '../../models/snaptchat-story.model';
import {NavigationRouteProps} from '../../routes/app.routes';
import {
  SnapchatDetailContainer,
  SnapchatDetailImage,
} from './snapchat-detail.styles';
const {height} = Dimensions.get('screen');

export interface SnapchatDetailPageProps {
  story: SnapchatStoryModel;
}

export const SnapchatDetailPage: React.FC<SnapchatDetailPageProps> = () => {
  const navigation = useNavigation();
  const route = useRoute<NavigationRouteProps<'SnapchatDetailPage'>>();

  const isGestureActive = useSharedValue(false);
  //const animatedVideo = Animated.createAnimatedComponent(Video)
  const {story} = route.params;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      isGestureActive.value = true;
    },
    onActive: ({translationX, translationY}) => {
      translateX.value = translationX;
      translateY.value = translationY;
    },
    onEnd: ({velocityX, velocityY}) => {
      const goBack =
        snapPoint(translateY.value, velocityY, [0, height]) === height;

      if (goBack) {
        runOnJS(navigation.goBack)();
      } else {
        translateX.value = withSpring(0, {velocity: velocityX});
        translateY.value = withSpring(0, {velocity: velocityY});
      }

      isGestureActive.value = false;
    },
  });

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      translateY.value,
      [0, height],
      [1, 0.5],
      Extrapolate.CLAMP,
    );
    return {
      flex: 1,
      transform: [
        {
          translateX: translateX.value * scale,
        },
        {
          translateY: translateY.value * scale,
        },
        {
          scale,
        },
      ],
    };
  });

  const borderStyle = useAnimatedStyle(() => ({
    borderRadius: withTiming(isGestureActive.value ? 24 : 0),
  }));

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <SnapchatDetailContainer>
        <SharedElement id={story.id} style={{flex: 1}}>
          <SnapchatDetailImage
            source={story.thumb}
            style={[style, borderStyle, {alignSelf: 'flex-start'}]}
          />
        </SharedElement>
      </SnapchatDetailContainer>
    </PanGestureHandler>
  );
};
