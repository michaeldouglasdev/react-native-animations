import React from 'react';
import {  CreditCardListPage } from './src/pages/credit-card/credit-card-list';
import { UserListPage } from './src/pages/user-list/user-list';
import { ParallaxPage } from './src/pages/parallax/parallax';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { BannerDetailPage, BannerDetailPageProps } from './src/pages/banner/banner-detail-page';
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { TravelListPage } from './src/pages/travel/travel';
import { Easing } from 'react-native';
import { TravelDetailPage, TravelDetailPageProps } from './src/pages/travel/travel-detail';
import { BannerListPage } from './src/pages/banner/banner';
import { HomePage } from './src/pages/home/home';
import { SnapchatPage } from './src/pages/snapchat/snapchat';
import { SnapchatDetailPage, SnapchatDetailPageProps } from './src/pages/snapchat/snapchat-detail';
import { PhoneRingPage } from './src/pages/phone-ring/phone-ring';
import { ArtsListPage } from './src/pages/arts-list/arts-list';
import { GmailPage } from './src/pages/gmail/gmail';
import { FollowingBallPage } from './src/pages/following-balls/following-ball';
import { PizzeriaPage } from './src/pages/pizzeria/pizzeria';

const Stack = createSharedElementStackNavigator<NavigationStackProps>();

const options = () => ({
  gestureEnabled: false,
  headerBackTitleVisible: false,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 400, easing: Easing.inOut(Easing.ease)
      }
    },
    close: {
      animation: 'timing',
      config: {
        duration: 400, easing: Easing.inOut(Easing.ease)
      }
    }
  }
})

export type NavigationStackProps = {
  HomePage: undefined;
  BannersListPage: undefined;
  BannerDetailPage: BannerDetailPageProps;
  ParallaxPage: undefined;
  TravelListPage: undefined;
  TravelDetailPage: TravelDetailPageProps;
  CreditCardListPage: undefined;
  SnapchatPage: undefined;
  SnapchatDetailPage: SnapchatDetailPageProps;
  UserListPage: undefined;
  PhoneRingPage: undefined;
  ArtsListPage: undefined;
  GmailPage: undefined;
  FollowingBallPage: undefined;
  PizzeriaPage: undefined;
};

export type NavigationRouteProps<T extends keyof NavigationStackProps> = RouteProp<NavigationStackProps, T>

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'transparent'},
          cardOverlayEnabled: true,
        }}
        initialRouteName='HomePage'
      >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="BannersListPage" component={BannerListPage} />
        <Stack.Screen name="BannerDetailPage" component={BannerDetailPage } sharedElements={(route) => {
          return  [
            `item.${route.params.banner.key}.poster`
          ]
        }}/>
        <Stack.Screen name="ParallaxPage" component={ParallaxPage}/>
        <Stack.Screen name="CreditCardListPage" component={CreditCardListPage} />
        <Stack.Screen name="UserListPage" component={UserListPage} />
        <Stack.Screen name="SnapchatPage" component={SnapchatPage} />
        <Stack.Screen name="SnapchatDetailPage" component={SnapchatDetailPage} sharedElements={(route) => {
          return [route.params.story.id]
        }} options={{
          gestureEnabled: false,
          headerShown: false,
          cardOverlayEnabled: true,
          cardStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}/>
        <Stack.Screen name="PhoneRingPage" component={PhoneRingPage} />
        <Stack.Screen name="ArtsListPage" component={ArtsListPage} />
        <Stack.Screen name="GmailPage" component={GmailPage} />
        <Stack.Screen name="FollowingBallPage" component={FollowingBallPage} />
        <Stack.Screen name="PizzeriaPage" component={PizzeriaPage} />
        <Stack.Screen name="TravelListPage" component={TravelListPage} />
        <Stack.Screen name="TravelDetailPage" component={TravelDetailPage} options={{
          gestureEnabled: true,
          headerBackTitleVisible: false,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 400, easing: Easing.inOut(Easing.ease)
              }
            },
            close: {
              animation: 'timing',
              config: {
                duration: 400, easing: Easing.inOut(Easing.ease)
              }
            }
          },
          /*cardStyleInterpolator: ({ current: { progress}}) => {
            return {
              cardStyle: {
                opacity: progress
              }
            }
          }*/
        }}
        sharedElements={(route) => {
          return [
            `item.${route.params.item.key}.image`,
            `item.${route.params.item.key}.location`,
          ]
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}