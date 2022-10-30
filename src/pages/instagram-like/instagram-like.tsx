import React, { useRef } from 'react';
import { Dimensions, Image, Text } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { InstagramLikeContainer, InstagramLikeImageWrapper, InstagramLikeWrapperHeart } from './instagram-like.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import InstagramLikePageBackground from '../../../assets/images/instagram-like-page-background.jpeg';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSequence, withSpring } from 'react-native-reanimated';
const { width } = Dimensions.get('screen');

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export const InstagramLikePage: React.FC = () => {

  const doubleTapRef = useRef();
  const scale = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value
        }
      ]
    }
  });

  const handleDoubleTap = () => {
    scale.value = withSequence(
      withSpring(1),
      withDelay(500, withSpring(0, { overshootClamping: true }))
    )
  }
  return (
    <InstagramLikeContainer>
      <Text
        style={{
          transform: [
            {
              translateY: -50
            }
          ]
        }}
      >
        Double tap image to like
      </Text>
      <TapGestureHandler
        onActivated={() => console.log("single")}
        waitFor={doubleTapRef}
      >
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={handleDoubleTap}
        >
          <InstagramLikeImageWrapper>
            <Image
              source={InstagramLikePageBackground}
              style={{
                width,
                height: width
              }}
            />
            <InstagramLikeWrapperHeart
              style={{
                shadowOffset: {
                  width: 0,
                  height: 20
                },
                shadowOpacity: 1,
                shadowRadius: 35
              }}
            >
              <AnimatedIcon
                name='heart'
                color='#fff'
                size={64}
                style={rStyle}
              />
            </InstagramLikeWrapperHeart>
          </InstagramLikeImageWrapper>
        </TapGestureHandler>
      </TapGestureHandler>
    </InstagramLikeContainer>
  )
}