import React from 'react';
import { Dimensions } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';
import { BALL_SIZE, FollowingBallContainer, FollowingBallItem } from './following-ball.styles';
import { useFollowAnimatedPosition } from './hooks/useFollowAnimatedPosition';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export const FollowingBallPage: React.FC = () => {

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({x: 0, y: 0});

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {x: translateX.value, y: translateY.value};
    })
    .onUpdate(event => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd(() => {
      if (translateX.value > SCREEN_WIDTH - BALL_SIZE) {
        translateX.value = SCREEN_WIDTH - BALL_SIZE
      }
    });

  const { followX: blueFollowX, followY: blueFollowY, rStyle: blueStyle } = useFollowAnimatedPosition({
    x: translateX,
    y: translateY
  });

  const { followX: redFollowX, followY: redFollowY, rStyle: redStyle } = useFollowAnimatedPosition({
    x: blueFollowX,
    y: blueFollowY
  });

  const { rStyle: greenStyle } = useFollowAnimatedPosition({
    x: redFollowX,
    y: redFollowY
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FollowingBallContainer>
        <FollowingBallItem
          background='red'
          style={redStyle}
        />

        <FollowingBallItem
          background='green'
          style={greenStyle}
        />

        <GestureDetector gesture={gesture}>
          <FollowingBallItem
            background='blue'
            style={blueStyle}
          />
        </GestureDetector>
      </FollowingBallContainer>
    </GestureHandlerRootView>
  )
}