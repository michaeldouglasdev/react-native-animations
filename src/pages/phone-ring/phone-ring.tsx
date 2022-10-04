import React from 'react';
import { PhoneRingContainer, PhoneRingItem } from './phone-ring.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { PhoneRingItemAnimatedWrapper } from './components/phone-ring-item-animated-wrapper';

export const PhoneRingPage: React.FC = () => {

  return (
    <PhoneRingContainer>
      <PhoneRingItem>
        {Array.from({ length: 3}).map((_, index) => {
          return (
            <PhoneRingItemAnimatedWrapper
              key={index}
              index={index}
            >
              <PhoneRingItem />
            </PhoneRingItemAnimatedWrapper>
          )
        })}
        <Icon name='call-outline' color='white' size={32} />
      </PhoneRingItem>
    </PhoneRingContainer>
  )
}