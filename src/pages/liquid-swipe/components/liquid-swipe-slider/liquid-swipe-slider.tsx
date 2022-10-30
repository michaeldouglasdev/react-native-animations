import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { snapPoint, useVector } from "react-native-redash";
import { LiquidSwipeSliderContainer } from "./liquid-swipe-slider.styles";

import { HEIGHT, LiquidSwipeWave, MARGIN_WIDTH, MIN_LEDGE, Side, WIDTH } from "../liquid-swipe-wave/liquid-swipe-wave";

const PREV = WIDTH;
const NEXT = 0;

interface LiquidSwipeSliderProps {
  index: number;
  setIndex: (value: number) => void;
  children: JSX.Element;
  prev?: JSX.Element;
  next?: JSX.Element;
}

export const LiquidSwipeSlider: React.FC<LiquidSwipeSliderProps> = ({
  index,
  children: current,
  prev,
  next,
  setIndex,
}) => {

  const activeSide = useSharedValue(Side.NONE);
  const left = useVector(0, HEIGHT / 2);
  const right = useVector(0, HEIGHT / 2);
  const zIndex = useSharedValue(0);
  const isTransitioningLeft = useSharedValue(false);
  const isTransitioningRight = useSharedValue(false);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: ({ x }) => {
      if (x < MARGIN_WIDTH) {
        activeSide.value = Side.LEFT;
      } else if (x > WIDTH - MARGIN_WIDTH) {
        activeSide.value = Side.RIGHT;
      } else {
        activeSide.value = Side.NONE;
      }
    },

    onActive: ({ x, y }) => {
      if (activeSide.value === Side.LEFT) {
        left.x.value = x;
        left.y.value = y;
      } else if (activeSide.value === Side.RIGHT) {
        right.x.value = WIDTH - x;
        right.y.value = y;
      }
    },
    onEnd: ({ x, velocityX, velocityY }) => {
      if (activeSide.value === Side.LEFT) {
        const snapPoints = [MIN_LEDGE, WIDTH];
        const dest = snapPoint(x, velocityX, snapPoints);
        isTransitioningLeft.value = dest === WIDTH;
        left.y.value = withSpring(HEIGHT / 2, { velocity: velocityX });
        left.x.value = withSpring(dest, {
          velocity: velocityX,
          overshootClamping: !!isTransitioningLeft.value,
          restSpeedThreshold: isTransitioningLeft.value ? 100 : 0.01,
          restDisplacementThreshold: isTransitioningLeft.value ? 100 : 0.01
        }, () => {
          if (isTransitioningLeft.value) {
            runOnJS(setIndex)(index - 1)
          }
        });
      } else if (activeSide.value === Side.RIGHT) {
        const snapPoints = [WIDTH - MIN_LEDGE, 0];
        const dest = snapPoint(x, velocityX, snapPoints);
        isTransitioningRight.value = dest === 0;
        right.y.value = withSpring(HEIGHT / 2, { velocity: velocityX });
        right.x.value = withSpring(WIDTH - dest, {
          velocity: velocityX,
          overshootClamping: !!isTransitioningRight.value,
          restSpeedThreshold: isTransitioningRight.value ? 100 : 0.01,
          restDisplacementThreshold: isTransitioningRight.value ? 100 : 0.01
        }, () => {
          if (isTransitioningRight.value) {
            runOnJS(setIndex)(index + 1);
          }
        });
      }
    }
  });
  const hasPrev = !!prev;
  const hasNext = !!next;

  useEffect(() => {
    left.x.value = withSpring(MIN_LEDGE);
    right.x.value = withSpring(MIN_LEDGE);
  }, [left.x, right.x]);

  const leftStyle = useAnimatedStyle(() => {

    return {
      zIndex: activeSide.value === Side.LEFT ? 100 : 0
    }
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <LiquidSwipeSliderContainer>
        {current}
        {prev && (
          <Animated.View style={[StyleSheet.absoluteFill, leftStyle]}>
            <LiquidSwipeWave side={Side.LEFT} position={left} isTransitioning={isTransitioningLeft}>{prev}</LiquidSwipeWave>
          </Animated.View>
        )}
        {next && (
          <Animated.View style={StyleSheet.absoluteFill}>
            <LiquidSwipeWave side={Side.RIGHT} position={right} isTransitioning={isTransitioningRight}>{next}</LiquidSwipeWave>
          </Animated.View>
        )}
      </LiquidSwipeSliderContainer>
    </PanGestureHandler>
  );
};
