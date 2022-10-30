import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import React from 'react';
import { BottomBar } from '../../components/bottom-bar/bottom-bar';
import { AnimatedBottomBarLottieIcon, AnimatedBottomBarPlaceholderPage } from './animated-bottom-bar.styles';

import ChatIcon from '../../../assets/animation/bottom-bar-1/chat.icon.json'
import HomeIcon from '../../../assets/animation/bottom-bar-1/home.icon.json'
import SettingsIcon from '../../../assets/animation/bottom-bar-1/settings.icon.json'
import UploadIcon from '../../../assets/animation/bottom-bar-1/upload.icon.json'

const Tab = createBottomTabNavigator()

export const AnimatedBottomBarPage: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        options={{
          // @ts-ignore
          tabBarIcon: ({ ref }) => <AnimatedBottomBarLottieIcon ref={ref} loop={false} source={HomeIcon} />,
        }}
        component={AnimatedBottomBarPlaceholderPage}
      />
      <Tab.Screen
        name="Upload"
        options={{
          // @ts-ignore
          tabBarIcon: ({ ref }) => <AnimatedBottomBarLottieIcon ref={ref} loop={false} source={UploadIcon} />,
        }}
        component={AnimatedBottomBarPlaceholderPage}
      />
      <Tab.Screen
        name="Chat"
        options={{
          // @ts-ignore
          tabBarIcon: ({ ref }) => <AnimatedBottomBarLottieIcon ref={ref} loop={false} source={ChatIcon} />,
        }}
        component={AnimatedBottomBarPlaceholderPage}
      />
      <Tab.Screen
        name="Settings"
        options={{
          // @ts-ignore
          tabBarIcon: ({ ref }) => <AnimatedBottomBarLottieIcon ref={ref} loop={false} source={SettingsIcon} />,
        }}
        component={AnimatedBottomBarPlaceholderPage}
      />
    </Tab.Navigator>

  )
}
