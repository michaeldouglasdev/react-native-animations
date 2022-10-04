import React, { useRef } from 'react';
import { ArtsListPageContainer } from './arts-list.styles';
import { Animated, Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import { getFakeArts } from '../../utils/get-fake-arts.util';
const { width, height } = Dimensions.get('screen');

const imageWidth = width * 0.7;
const imageHeight = imageWidth * 1.54;

export const ArtsListPage: React.FC = () => {

  const scrollX = useRef(new Animated.Value(0)).current;
  const arts = getFakeArts();

  return (
    <ArtsListPageContainer>
      <View style={StyleSheet.absoluteFillObject}>
        {arts.map((image, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ]

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0]
          })
          return (
            <Animated.Image
              key={index}
              source={{uri: image}}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity
                }
              ]}
              blurRadius={50}
            />
          )
        })}
      </View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true}
        )}
        horizontal
        pagingEnabled
        data={arts}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width,
                justifyContent: 'center',
                alignItems: 'center',
                shadowOpacity: 1,
                shadowColor: '#fff',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowRadius: 10
              }}
            >
              <Image
                key={index}
                source={{uri: item}}
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  resizeMode: 'cover',
                  borderRadius: 16,
                }}
              />
            </View>
          )
        }}
      />
    </ArtsListPageContainer>
  )
}