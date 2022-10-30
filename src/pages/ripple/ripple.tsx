import React from 'react';
import { Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { measure, useAnimatedRef, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { RippleButton, RippleButtonWrapper, RippleContainer, RippleEffect } from './ripple.styles';

export const RipplePage: React.FC = () => {

  const centerX = useSharedValue(0);
  const centerY = useSharedValue(0);
  const scale = useSharedValue(0);

  const aRef = useAnimatedRef<View>();
  const width = useSharedValue(0);
  const height = useSharedValue(0);

  const opacity = useSharedValue(0);

  const tapGesture = Gesture.Tap()
    .onStart((event) => {
      const layout = measure(aRef);
      height.value = layout.height;
      width.value = layout.width;

      centerX.value = event.x;
      centerY.value = event.y;

      opacity.value = 1;
      scale.value = 0;
      scale.value = withTiming(1, { duration: 1000 })
    })
    // Like a catch
    .onFinalize(() => {
      opacity.value = withTiming(0, { duration: 1000 });
    })

  const rStyle = useAnimatedStyle(() => {
    const circleRadius = Math.sqrt(width.value ** 2 + height.value ** 2);

    const translateX = centerX.value - circleRadius;
    const translateY = centerY.value - circleRadius;

    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: circleRadius * 2,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      opacity: opacity.value,
      position: 'absolute',
      transform: [
        {
          translateX
        },
        {
          translateY
        },
        {
          scale: scale.value
        }
      ]
    }
  });
  return (
    <RippleContainer>
      <RippleButtonWrapper ref={aRef}>
        <GestureDetector gesture={tapGesture}>
          <RippleButton>
            <Text>Tap</Text>
            <RippleEffect style={rStyle} />
          </RippleButton>
        </GestureDetector>
      </RippleButtonWrapper>
    </RippleContainer>
  )
}