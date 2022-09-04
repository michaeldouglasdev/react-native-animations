import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, Text, Dimensions, View, Animated, PanResponder, Button, TouchableWithoutFeedback } from 'react-native';
import { getFakePosters } from '../../utils/get-fake-posters.util';
import { BannerItem, BannerListContainer, BannerListContent, BannerListContentTitle } from './banner.styles';
import {
  SharedElement
} from 'react-navigation-shared-element';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const WIDTH_SCREEN = Dimensions.get('screen').width;
const HEIGHT_SCREEN = Dimensions.get('screen').height;

const BANNER_ITEM_WIDTH = WIDTH_SCREEN * 0.7;
const BANNER_ITEM_HEIGHT = BANNER_ITEM_WIDTH * 1.7;
const BANNER_ITEM_SPACING = 20;
const BANNER_ITEM_THRESHOLD = BANNER_ITEM_WIDTH * 0.2;

export const BannerListPage: React.FC = () => {

  const banners = getFakePosters();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollXAnimated = useRef(new Animated.Value(0)).current;
  const scrollXIndex = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();
  const setActiveIndex = (currentIndex: number) => {
    scrollXIndex.setValue(currentIndex);
    setSelectedIndex(currentIndex);
  }
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_event, _gesture) => {
      return true;
    },
    onPanResponderRelease: (_event, gesture) => {
      const nextBanner = gesture.dx < -BANNER_ITEM_THRESHOLD;
      const beforeBanner = gesture.dx > BANNER_ITEM_THRESHOLD;

      if (nextBanner) {
        if (selectedIndex < banners.length - 1) {
          setActiveIndex(selectedIndex + 1);
        }
      } else if (beforeBanner) {
        if (selectedIndex > 0) {
          setActiveIndex(selectedIndex - 1);
        }
      }
    }
  })

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start()
  }, []);

  return (
    <BannerListContainer>
      <BannerListContent>
        {banners.map(banner => (
          <BannerListContentTitle
            key={banner.title}
            style={{
              transform: [{
                translateY: scrollXAnimated.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [50, 0,-50]
                })
              }]
            }}
          >
            {banner.title}
          </BannerListContentTitle>
        ))}
      </BannerListContent>
      <Animated.View
        style={{
          padding: 5,
          flex: 1,
        }}

        {...panResponder.panHandlers}
      >
        <FlatList
          data={banners}
          keyExtractor={banner => `item.${banner.title}.image`}
          horizontal
          removeClippedSubviews={false}
          scrollEnabled={false}
          contentContainerStyle={{
            justifyContent: 'center',
            padding: BANNER_ITEM_SPACING * 2,
          }}
          CellRendererComponent={({ item, index, children, style, ...props}) => {
            const newStyle = [
              style,
              {zIndex: banners.length - index}
            ]

            return (
              <View style={newStyle} index={index} {...props}>
                {children}
              </View>
            )
          }}
          renderItem={({item, index}) => {
            const inputRange = [index -1, index, index + 1];
            const translateX = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [BANNER_ITEM_WIDTH * 0.2, 0, -BANNER_ITEM_WIDTH * 0.5],
            });
            const scale = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [0.8, 1, 1.3],
            });
            const opacity = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [1 - 1 / 3, 1, 0]
            })
            return (
              <BannerItem
                style={{
                  transform: [
                    {
                      translateX
                    },
                    {
                      scale,
                    },

                  ],
                  opacity
                }}
              >
                <TouchableWithoutFeedback onPress={() => navigation.navigate('BannerDetailPage', {
                  banner: banners[selectedIndex]
                })}>
                <SharedElement id={`item.${item.key}.poster`}>
                  <Image
                    source={{
                      uri: item.poster,
                      height: BANNER_ITEM_HEIGHT,
                      width: BANNER_ITEM_WIDTH,
                    }}
                  />
                </SharedElement>
                </TouchableWithoutFeedback>
              </BannerItem>
            )
          }}
        />
      </Animated.View>

      <Button onPress={() => setActiveIndex(0)} title="Limpar" />
    </BannerListContainer>
  )
}
