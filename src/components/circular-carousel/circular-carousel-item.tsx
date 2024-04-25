import React from 'react';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  CircularCarouselItemContainer,
  CircularCarouselItemImage,
  CIRCULAR_CAROUSEL_ITEM_WIDTH,
} from './circular-carousel-item.styles';

export interface CircularCarouselItemProps {
  index: number;
  imageUri: string;
  contentOffset: Animated.SharedValue<number>;
  scaleEnabled?: boolean;
}
export const CircularCarouselItem: React.FC<CircularCarouselItemProps> = ({
  index,
  contentOffset,
  imageUri,
  scaleEnabled,
}) => {
  const inputRange = [
    (index - 2) * CIRCULAR_CAROUSEL_ITEM_WIDTH,
    (index - 1) * CIRCULAR_CAROUSEL_ITEM_WIDTH,
    index * CIRCULAR_CAROUSEL_ITEM_WIDTH,
    (index + 1) * CIRCULAR_CAROUSEL_ITEM_WIDTH,
    (index + 2) * CIRCULAR_CAROUSEL_ITEM_WIDTH,
  ];

  const scaleOutputRange = useDerivedValue(() => {
    const avoidScalingOutputRange = [1, 1, 1, 1, 1];
    const showScalingOutputRange = [0.9, 0.9, 1.2, 0.9, 0.9];

    const finalOutputRange = scaleEnabled
      ? showScalingOutputRange
      : avoidScalingOutputRange;

    const scaledOutput = withSpring(finalOutputRange);

    return scaledOutput;
  }, [scaleEnabled]);

  const scale = useDerivedValue(() => {
    const interpolatedScale = interpolate(
      contentOffset.value,
      inputRange,
      scaleOutputRange.value,
      Extrapolate.CLAMP,
    );

    return interpolatedScale;
  }, [scaleEnabled]);

  const rStyle = useAnimatedStyle(() => {
    const translateOutputRange = [
      0,
      -CIRCULAR_CAROUSEL_ITEM_WIDTH / 3,
      -CIRCULAR_CAROUSEL_ITEM_WIDTH / 2,
      -CIRCULAR_CAROUSEL_ITEM_WIDTH / 3,
      0,
    ];
    const opacityOutputRange = [0.5, 1, 1, 1, 0.5];

    const translateY = interpolate(
      contentOffset.value,
      inputRange,
      translateOutputRange,
    );
    const opacity = interpolate(
      contentOffset.value,
      inputRange,
      opacityOutputRange,
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [
        {
          translateX:
            CIRCULAR_CAROUSEL_ITEM_WIDTH / 2 + CIRCULAR_CAROUSEL_ITEM_WIDTH,
        },
        {
          translateY,
        },
        {scale: scale.value},
      ],
    };
  }, []);

  return (
    <CircularCarouselItemContainer style={rStyle}>
      <CircularCarouselItemImage source={{uri: imageUri}} />
    </CircularCarouselItemContainer>
  );
};
