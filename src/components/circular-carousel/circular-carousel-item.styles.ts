import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { Dimensions } from '../../utils/dimensions';


export const CIRCULAR_CAROUSEL_ITEM_WIDTH = Dimensions.width / 4;

export const CircularCarouselItemContainer = styled(Animated.View)`
  width: ${CIRCULAR_CAROUSEL_ITEM_WIDTH}px;
  aspect-ratio: 1;
  shadow-color: #000;
  shadow-offset: 10px 0;
  shadow-opacity: 0.2;
  shadow-radius: 10px;
`;

export const CircularCarouselItemImage = styled.Image`
  flex: 1;
  border-width: 2px;
  border-color: '#fff';
  shadow-radius: 20px;
  border-radius: 100px;
  margin: 8px;
`;