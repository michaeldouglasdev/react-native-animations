import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Button, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions, Text, View, Animated } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { getFakeTravel } from '../../utils/get-fake-travel.util';
import { TravelItemDay, TravelItemDayLabel, TravelItemDayValues, TravelItemLocation, TravelListContainer } from './travel.styles';
const { width } = Dimensions.get('screen');

export const SIZE = 64;
export const ICON_SIZE = SIZE * 0.6;
export const SPACING = 12;
export const ITEM_WIDTH = width * 0.68;
export const ITEM_HEIGHT = width * 0.68 * 1.15;
export const RADIUS = 18;
export const FULL_SIZE = width * 0.68 + SPACING * 2;

const data = getFakeTravel()

export const TravelListPage: React.FC = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <TravelListContainer>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        decelerationRate='fast'
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: {x: scrollX}}}], { useNativeDriver: true}
        )}
        renderItem={({ item, index }) => {
          const inputRange = [(index -1) * FULL_SIZE, index * FULL_SIZE, (index + 1) * FULL_SIZE];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.1, 1]
          })
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('TravelDetailPage', {
                item: data[index],
              })}
              style={{width: ITEM_WIDTH, height: ITEM_HEIGHT, margin: SPACING}}>
              <SharedElement
                id={`item.${item.key}.image`}
                style={[StyleSheet.absoluteFillObject]}
              >
                <View style={[StyleSheet.absoluteFillObject, { overflow: 'hidden', borderRadius: RADIUS}]}>
                  <Animated.Image
                    source={{uri: item.image}}
                    style={[StyleSheet.absoluteFillObject,
                      {
                        resizeMode: 'cover',
                        //transform: [{scale}]
                      },
                    ]}
                  />
                </View>
              </SharedElement>
              <SharedElement id={`item.${item.key}.location`}>
                <TravelItemLocation
                  style={{
                    transform: [
                      {
                        translateX
                      }
                    ]
                  }}
                >
                  {item.location}
                </TravelItemLocation>
              </SharedElement>
              <TravelItemDay>
                <TravelItemDayValues>{item.numberOfDays}</TravelItemDayValues>
                <TravelItemDayLabel>days</TravelItemDayLabel>
              </TravelItemDay>
            </TouchableOpacity>
          )
        }}
      />
    </TravelListContainer>
  )
}