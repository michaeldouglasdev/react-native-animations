import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { PhoneRingItemAnimatedWrapperContainer} from './phone-ring-item-animated-wrapper.styles';

interface PhoneRingItemAnimatedWrapperProps {
  index: number;
  children: React.ReactElement;
}
export const PhoneRingItemAnimatedWrapper: React.FC<PhoneRingItemAnimatedWrapperProps> = ({
  index,
  children,
}) => {

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 100,
        useNativeDriver: true,
        duration: 2000,
        delay: 400 * index
      })
    ).start();
  }, []);

  return (
    <PhoneRingItemAnimatedWrapperContainer
      style={{
        transform: [
          {
            scale: animation.interpolate({
              inputRange: [0, 100],
              outputRange: [1, 4]
            }),
          }
        ],
        opacity: animation.interpolate({
          inputRange: [0, 100],
          outputRange: [0.7, 0]
        })
      }}
    >
      {children}
    </PhoneRingItemAnimatedWrapperContainer>
  )
}