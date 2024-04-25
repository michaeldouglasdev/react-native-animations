import React, {useMemo} from 'react';
import {
  FlatList,
  Platform,
  StyleProp,
  Text,
  ViewStyle,
  ViewToken,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  InstagramUserModel,
  InstagramUserStoryModel,
} from '../../../models/instagram-user.model';
import {RenderItem} from '../../../types/render-item';
import {WIDTH} from '../../liquid-swipe/components/liquid-swipe-wave/liquid-swipe-wave';
import {
  UserStoryContainer,
  UserStoryImage,
  USER_STORY_WIDTH,
} from './user-story.styles';

const perspective = 1000;

interface UserStoryProps {
  user: InstagramUserModel;
  viewableItems: Animated.SharedValue<ViewToken[]>;
  index: number;
  scrollX: Animated.SharedValue<number>;
}
export const UserStory: React.FC<UserStoryProps> = ({user, index, scrollX}) => {
  /*const renderItem = ({item}: RenderItem<InstagramUserStoryModel>) => {
    return (

    )
  }*/

  const angle = useMemo(() => perspective / USER_STORY_WIDTH / 2, []);

  const styles = useAnimatedStyle(() => {
    const offset = index * USER_STORY_WIDTH;

    const inputRange = [offset - USER_STORY_WIDTH, offset + USER_STORY_WIDTH];

    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            inputRange,
            [USER_STORY_WIDTH * 0.5, -USER_STORY_WIDTH * 0.5],
            Extrapolation.CLAMP,
          ),
        },
        {
          rotateY: `${interpolate(
            scrollX.value,
            inputRange,
            [angle, -angle],
            Extrapolation.CLAMP,
          )}rad`,
        },
        {
          translateX: interpolate(
            scrollX.value,
            inputRange,
            [USER_STORY_WIDTH * 0.5, -USER_STORY_WIDTH * 0.5],
            Extrapolation.CLAMP,
          ),
        },
        {
          perspective,
        },
      ],
    };
  });

  return (
    <UserStoryContainer style={[styles]}>
      <UserStoryImage source={{uri: user.stories[0].image}} />
    </UserStoryContainer>
  );
};
