import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const ASPECT_RATIO = height / width;

export const TAROT_CARD_WIDTH = width - 128;
export const TAROT_CARD_HEIGHT = TAROT_CARD_WIDTH * ASPECT_RATIO;
const IMAGE_WIDTH = TAROT_CARD_WIDTH * 0.9;
const IMAGE_HEIGHT = IMAGE_WIDTH * ASPECT_RATIO;

export const TarotCardContainer = styled(Animated.View)`
  position: absolute;
  top: ${(height - IMAGE_HEIGHT) / 2}px;
  left: ${(width - IMAGE_WIDTH) / 2}px;
  justify-content: center;
  align-items: center;
  pointer-events: box-none;
  align-self: baseline;
`;

export const TarotCardImageWrapper = styled(Animated.View)`
  background-color: #fff;
  border-radius: 10px;
  width: ${TAROT_CARD_WIDTH}px;
  height: ${TAROT_CARD_HEIGHT}px;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const TarotCardImage = styled.Image`
  width: ${IMAGE_WIDTH}px;
  height: ${IMAGE_HEIGHT}px;
  resize-mode: contain;
`
