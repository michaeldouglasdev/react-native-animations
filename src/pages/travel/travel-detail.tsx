import { useRoute } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, FlatList, Image, StyleSheet, View, Dimensions, Text } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { NavigationRouteProps } from '../../../App';
import { TravelModel } from '../../models/travel.model';
import { SPACING } from './travel';
import { TravelDetailActitivies, TravelDetailActivitiesText, TravelDetailContainer, TravelDetailImageWrapper, TravelDetailLocation } from './travel-detail.styles';
const { width } = Dimensions.get('screen');

export interface TravelDetailPageProps {
  item: TravelModel;
}
export const TravelDetailPage: React.FC = () => {
  const route = useRoute<NavigationRouteProps<"TravelDetailPage">>();
  const animationActivities = useRef(new Animated.Value(width)).current;

  const { item } = route.params;

  useEffect(() => {
    Animated.spring(animationActivities, {
      toValue: 0,
      bounciness: 5,
      delay: 100,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <TravelDetailContainer>
      <SharedElement
        id={`item.${item.key}.image`}
        style={[StyleSheet.absoluteFillObject]}
      >
        <TravelDetailImageWrapper>
          <Animated.Image
            source={{uri: item.image}}
            style={[StyleSheet.absoluteFillObject,
              {
                resizeMode: 'cover',
                borderRadius: 0
              },
            ]}
          />
        </TravelDetailImageWrapper>
      </SharedElement>
      <SharedElement id={`item.${item.key}.location`}>
        <TravelDetailLocation>
          {item.location}
        </TravelDetailLocation>
      </SharedElement>
      <TravelDetailActitivies>
        <TravelDetailActivitiesText
          style={{
            transform: [
              {
                translateX: animationActivities
              }
            ]
          }}
        >
          Activities
        </TravelDetailActivitiesText>

        <FlatList
          data={[...Array(8).keys()]}
          keyExtractor={item => String(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{padding: SPACING}}
          renderItem={({ item, index }) => {

            return (
              <TravelDetailActivity index={item}/>
            )
          }}
        />
      </TravelDetailActitivies>
    </TravelDetailContainer>
  )
}

interface TravelDetailActivityProps {
  index: number;
}
const TravelDetailActivity: React.FC<TravelDetailActivityProps> = ({ index }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 100,
      duration: 800,
      delay: 1000 + index * 400,
      useNativeDriver: true
    }).start();
  }, []);

    return (
      <Animated.View style={{
        backgroundColor: 'white',
        padding: SPACING,
        width: width * 0.33,
        height: width * 0.5,
        marginRight: 20,
        transform: [
          {
            scale: animation.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
              extrapolate: 'clamp'
            })
          }
        ],
        opacity: animation.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 1],
          extrapolate: 'clamp'
        })
      }}>
        <Image
          source={{uri: 'https://miro.medium.com/max/124/1*qYUvh-EtES8dtgKiBRiLsA.png'}}
          style={{ width: '100%', height: '70%', resizeMode: 'cover'}}
        />
        <Text>Activity #{index + 1}</Text>
      </Animated.View>
    )

}