import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const ParallaxContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const ParallaxItemContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const ParallaxItemShadow = styled.View`
  border-radius: 18px;
  shadow-color: #000;
  shadow-opacity: 0.5;
  shadow-radius: 30px;
  shadow-offset: 2px 5px;

  padding: 12px;
`;

export const ParallaxItemWrapper = styled.View`
  overflow: hidden;
  align-items: center;

  border-width: 10px;
  border-color: white;
  border-radius: 18px;
`
export const ParallaxItemImage = styled(Animated.Image)`
  resize-mode: cover;
`;