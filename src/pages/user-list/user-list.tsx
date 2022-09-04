import React from 'react';
import { useRef } from 'react';
import { Image, StatusBar, Text, View, Animated } from 'react-native';
import { getFakeData } from '../../utils/get-fake-data.util';
import { UserListContainer } from './user-list.styles';

const BG_IMAGE = 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg'

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = 150 // height + margin

export const UserListPage: React.FC = () => {

  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <UserListContainer>
      <Image
        source={{uri: BG_IMAGE}}
        blurRadius={80}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY }}}],
          { useNativeDriver: true }
        )}
        data={getFakeData()}
        keyExtractor={user => user.key}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42
        }}
        renderItem={({ item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ]
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.5)
          ]

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
            extrapolate: 'clamp'
          });

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 1],
            extrapolate: 'clamp'
          })
          return (
            <Animated.View style={{
              flexDirection: 'row',
              padding: SPACING,
              marginBottom: SPACING,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 12,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: .3,
              shadowRadius: 20,
              opacity,
              transform: [{scale}],
              height: 130
              }}>
              <Image
                source={{ uri: item.image}}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  margin: SPACING / 2,
                }}
              />
              <View style={{flex: 1}}>
                <Text style={{ fontSize: 22, fontWeight: '700'}}>{item.name}</Text>
                <Text style={{ fontSize: 18, opacity: .7, flexShrink: 1}}>{item.jobTitle}</Text>
                <Text style={{ fontSize: 12, opacity: .8, color: '#00ffcc'}}>{item.email}</Text>
              </View>
            </Animated.View>
          )
        }}
      />
    </UserListContainer>
  )
}