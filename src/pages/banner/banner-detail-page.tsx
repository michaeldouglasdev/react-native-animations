import React, { useEffect, useRef } from 'react';
import { BannerDetailContent, BannerDetailContentAddress, BannerDetailContentAddressWrapper, BannerDetailContentDate, BannerDetailContentFooter, BannerDetailContentFooterAddToCalendar, BannerDetailContentFooterKnowMore, BannerDetailContentHeader, BannerDetailContentHeaderInterestedButton, BannerDetailContentHeaderInterestedButtonText, BannerDetailContentHeaderTitle, BannerDetailImage, BannerDetailPageContainer } from './banner-detail-page.styles';

import { SharedElement } from 'react-navigation-shared-element';
import { Animated, Dimensions, Easing, TouchableWithoutFeedback } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PosterModel } from '../../models/poster.model';
import { NavigationRouteProps } from '../../../App';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

export interface BannerDetailPageProps {
  banner: PosterModel;
}
export const BannerDetailPage: React.FC = () => {
  const route = useRoute<NavigationRouteProps<"BannerDetailPage">>();
  const { banner } = route.params;
  const translateY = useRef(new Animated.Value(height)).current;
  const [isInterested, setIsInterested] = useState<boolean>(false);
  const rotateInterestedButton = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, []);

  const handleToggleIsInterested = () => {
    if (isInterested) {
      setIsInterested(false);
      Animated.spring(rotateInterestedButton, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(rotateInterestedButton, {
        toValue: 100,
        useNativeDriver: true,

      }).start();
      setIsInterested(true);
    }
  }

  return (
    <BannerDetailPageContainer>
      <SharedElement id={`item.${banner.key}.poster`} style={{flex: 1}}>
        <BannerDetailImage
          source={{
            uri: banner.poster,
          }}
        />
      </SharedElement>

      <BannerDetailContent
        style={{
          transform: [
            {
              translateY
            }
          ]
        }}
      >
        <BannerDetailContentHeader>
          <BannerDetailContentHeaderTitle>{banner.title}</BannerDetailContentHeaderTitle>

          <TouchableWithoutFeedback onPress={handleToggleIsInterested}>
            <BannerDetailContentHeaderInterestedButton
              active={isInterested}
              style={{
                transform: [
                  {
                    rotateY: rotateInterestedButton.interpolate({
                      inputRange: [0, 100],
                      outputRange: ['0deg', '180deg'],
                    })
                  },
                ],

              }}
            >
              <BannerDetailContentHeaderInterestedButtonText>Going</BannerDetailContentHeaderInterestedButtonText>
            </BannerDetailContentHeaderInterestedButton>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handleToggleIsInterested}>
            <BannerDetailContentHeaderInterestedButton
              active={isInterested}
              style={{
                transform: [
                  {
                    rotateY: rotateInterestedButton.interpolate({
                      inputRange: [0, 100],
                      outputRange: ['180deg', '360deg'],
                    })
                  }
                ],
              }}
              >
                <BannerDetailContentHeaderInterestedButtonText>Interested</BannerDetailContentHeaderInterestedButtonText>
              </BannerDetailContentHeaderInterestedButton>
          </TouchableWithoutFeedback>
        </BannerDetailContentHeader>

        <BannerDetailContentAddressWrapper>
          <Icon
            name="location-outline"
            size={16}
          />
          <BannerDetailContentAddress>{banner.location}</BannerDetailContentAddress>
        </BannerDetailContentAddressWrapper>

        <BannerDetailContentDate>{banner.date}</BannerDetailContentDate>

        <BannerDetailContentFooter>
          <BannerDetailContentFooterAddToCalendar>Add to calendar</BannerDetailContentFooterAddToCalendar>
          <BannerDetailContentFooterKnowMore>Know More</BannerDetailContentFooterKnowMore>
        </BannerDetailContentFooter>
      </BannerDetailContent>
    </BannerDetailPageContainer>
  )
}

