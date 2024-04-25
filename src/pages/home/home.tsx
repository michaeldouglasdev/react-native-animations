import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BottomSheet} from '../../components/bottomsheet/bottomsheet';
import {ScreenItem} from './home.styles';

export const HomePage: React.FC = () => {
  const navigation = useNavigation();
  const [visibleBottomsheet, setVisibleBottomsheet] = useState<boolean>(false);

  const handleClickOpenBottomsheet = () => {
    setVisibleBottomsheet(true);
  };

  const handleClickCloseBottomsheet = () => {
    setVisibleBottomsheet(false);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('ParallaxPage')}>
          <ScreenItem>
            <Text>Parallax</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TravelListPage')}>
          <ScreenItem>
            <Text>Parallax + Shared Element</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreditCardListPage')}>
          <ScreenItem>
            <Text>CreditCard List + Scroll Behind</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserListPage')}>
          <ScreenItem>
            <Text>User List + Scale</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('BannersListPage')}>
          <ScreenItem>
            <Text>Banner Stacked List</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SnapchatPage')}>
          <ScreenItem>
            <Text>Snapchat</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PhoneRingPage')}>
          <ScreenItem>
            <Text>PhoneRing</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ArtsListPage')}>
          <ScreenItem>
            <Text>ArtsList</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('StoryPage')}>
          <ScreenItem>
            <Text>Stories</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GmailPage')}>
          <ScreenItem>
            <Text>Gmail - Swipe to delete</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RipplePage')}>
          <ScreenItem>
            <Text>Ripple</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('FollowingBallPage')}>
          <ScreenItem>
            <Text>FollowingBalls</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TarotPage')}>
          <ScreenItem>
            <Text>Tarot</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoadingShinyCirclePage')}>
          <ScreenItem>
            <Text>Loading Shiny Circle</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AnimatedBottomBarPage')}>
          <ScreenItem>
            <Text>Animated Bottom Bar</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LiquidSwipePage')}>
          <ScreenItem>
            <Text>Liquid Swipe</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PizzeriaPage')}>
          <ScreenItem>
            <Text>Tab View</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('IPhoneWallpaper')}>
          <ScreenItem>
            <Text>IPhone Wallpaper - Skia</Text>
          </ScreenItem>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('IPhoneWallpaper2')}>
          <ScreenItem>
            <Text>IPhone Wallpaper 2 - Skia</Text>
          </ScreenItem>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('CircularCarouselPage')}>
          <ScreenItem>
            <Text>Circular Carousel</Text>
          </ScreenItem>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('GlassmorphismPage')}>
          <ScreenItem>
            <Text>Glassmorphism - Skia</Text>
          </ScreenItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AppleRingPage')}>
          <ScreenItem>
            <Text>Apple Ring - Skia</Text>
          </ScreenItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RequestPage')}>
          <ScreenItem>
            <Text>RequestPage</Text>
          </ScreenItem>
        </TouchableOpacity>
      </ScrollView>

      <Button title="Open Bottomsheet" onPress={handleClickOpenBottomsheet} />
      <BottomSheet
        isVisible={visibleBottomsheet}
        onClose={handleClickCloseBottomsheet}
        title="This is a title">
        <View style={{alignItems: 'center'}}>
          <Text>Text 1</Text>
          <Text>Text 2</Text>
          <Text>Text 3</Text>
          <Text>Text 4</Text>
          <Text>Text 5</Text>
          <Text>Text 6</Text>
          <Text>Text 7</Text>
          <Text>Text 8</Text>
          <Text>Text 9</Text>
          <Text>Text 10</Text>
          <Text>Text 11</Text>
          <Text>Text 12</Text>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};
