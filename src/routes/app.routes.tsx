import { NavigationContainer, RouteProp } from '@react-navigation/native';
import React from 'react';
import { Easing } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { AnimatedBottomBarPage } from '../pages/animated-bottom-bar/animated-bottom-bar';
import { ArtsListPage } from '../pages/arts-list/arts-list';
import { BannerListPage } from '../pages/banner/banner';
import { BannerDetailPage, BannerDetailPageProps } from '../pages/banner/banner-detail-page';
import { CreditCardListPage } from '../pages/credit-card/credit-card-list';
import { FollowingBallPage } from '../pages/following-balls/following-ball';
import { GmailPage } from '../pages/gmail/gmail';
import { HomePage } from '../pages/home/home';
import { InstagramLikePage } from '../pages/instagram-like/instagram-like';
import { LiquidSwipePage } from '../pages/liquid-swipe/liquid-swipe';
import { LoadingShinyCirclePage } from '../pages/loading-shiny-circle/loading-shiny-circle';
import { MoviesPage } from '../pages/movies/movies';
import { ParallaxPage } from '../pages/parallax/parallax';
import { PhoneRingPage } from '../pages/phone-ring/phone-ring';
import { PizzeriaPage } from '../pages/pizzeria/pizzeria';
import { RegisterProductPage } from '../pages/products/register-product';
import { RipplePage } from '../pages/ripple/ripple';
import { SnapchatPage } from '../pages/snapchat/snapchat';
import { SnapchatDetailPage, SnapchatDetailPageProps } from '../pages/snapchat/snapchat-detail';
import { TarotPage } from '../pages/tarot/tarot';
import { TravelListPage } from '../pages/travel/travel';
import { TravelDetailPage, TravelDetailPageProps } from '../pages/travel/travel-detail';
import { UserListPage } from '../pages/user-list/user-list';

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
  RipplePage: undefined;
  InstagramLikePage: undefined;
  TarotPage: undefined;
  LoadingShinyCirclePage: undefined;
  AnimatedBottomBarPage: undefined;
  LiquidSwipePage: undefined;
  RegisterProductPage: undefined;
  MoviesPage: undefined;
};
export type NavigationRouteProps<T extends keyof NavigationStackProps> = RouteProp<NavigationStackProps, T>

const Stack = createSharedElementStackNavigator<NavigationStackProps>();

export const AppRoutes: React.FC = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
        }}
        initialRouteName='HomePage'
      >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="BannersListPage" component={BannerListPage} />
        <Stack.Screen name="BannerDetailPage" component={BannerDetailPage} sharedElements={(route) => {
          return [
            `item.${route.params.banner.key}.poster`
          ]
        }} />
        <Stack.Screen name="ParallaxPage" component={ParallaxPage} />
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
        }} />
        <Stack.Screen name="PhoneRingPage" component={PhoneRingPage} />
        <Stack.Screen name="ArtsListPage" component={ArtsListPage} />
        <Stack.Screen name="GmailPage" component={GmailPage} />
        <Stack.Screen name="FollowingBallPage" component={FollowingBallPage} />
        <Stack.Screen name="PizzeriaPage" component={PizzeriaPage} />
        <Stack.Screen name="RipplePage" component={RipplePage} />
        <Stack.Screen name="InstagramLikePage" component={InstagramLikePage} />
        <Stack.Screen name="TarotPage" component={TarotPage} />
        <Stack.Screen name="LoadingShinyCirclePage" component={LoadingShinyCirclePage} />
        <Stack.Screen name="AnimatedBottomBarPage" component={AnimatedBottomBarPage} options={{
          cardStyle: {
            backgroundColor: '#604AE6'
          }
        }} />

        <Stack.Screen name="LiquidSwipePage" component={LiquidSwipePage} />
        <Stack.Screen name="RegisterProductPage" component={RegisterProductPage} />
        <Stack.Screen name="MoviesPage" component={MoviesPage} />

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