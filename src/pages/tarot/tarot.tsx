import React from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { getFakeTarotCards } from '../../utils/get-fake-tarot-cards.utils';
import { TarotCard } from './components/tarot-card/tarot-card';
import { TarotContainer } from './tarot.styles';

export const TarotPage: React.FC = () => {

  const tarotCards = getFakeTarotCards();
  const shuffleBack = useSharedValue(false);

  return (
    <TarotContainer>
      {tarotCards.map((card, index) => (
        <TarotCard image={card} key={card} index={index} shuffleBack={shuffleBack} />
      ))}
    </TarotContainer>
  )
}