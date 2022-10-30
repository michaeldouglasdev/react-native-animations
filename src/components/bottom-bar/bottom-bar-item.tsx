import React, { useEffect, useRef } from 'react';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { LayoutChangeEvent, Text } from 'react-native';
import { BottomBarIconWrapper, BottomBarItemCircle, BottomBarItemContainer } from './bottom-bar-item.styles';

type BottomBarItemProps = {
  active?: boolean
  options: BottomTabNavigationOptions
  onLayout: (e: LayoutChangeEvent) => void
  onPress: () => void
}
export const BottomBarItem: React.FC<BottomBarItemProps> = ({ active, options, onLayout, onPress }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      ref.current.play()
    }
  }, [active])

  // animations ------------------------------------------------------

  const bottomBarItemCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, { duration: 250 })
        }
      ]
    }
  })

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, { duration: 250 })
    }
  })

  return (
    <BottomBarItemContainer onPress={onPress} onLayout={onLayout}>
      <BottomBarItemCircle
        style={bottomBarItemCircleStyles}
      />
      <BottomBarIconWrapper style={animatedIconContainerStyles}>
        {/* @ts-ignore */}
        {options.tabBarIcon ? options.tabBarIcon({ ref }) : <Text>?</Text>}
      </BottomBarIconWrapper>
    </BottomBarItemContainer>
  )
}