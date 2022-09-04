import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { ITEM_WIDTH, SPACING } from './travel';

const { width } = Dimensions.get('screen');

export const TravelDetailContainer = styled.View`
  flex: 1;
  padding-top: 44px;
`;

export const TravelDetailImageWrapper = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const TravelDetailLocation = styled(Animated.Text)`
  font-size: 30px;
  color: #fff;
  font-weight: 800;
  width: ${ITEM_WIDTH * 0.8}px;
  text-transform: uppercase;
  position: absolute;
  top: 100px;
  left: ${SPACING * 2}px;
`;

export const TravelDetailActitivies = styled.View`
  position: absolute;
  bottom: 120px;
  left: ${SPACING}px;
  right: ${SPACING}px;
`;

export const TravelDetailActivitiesText = styled(Animated.Text)`
  font-size: 16px;
  color: #fff;
  font-weight: 800;
  width: ${ITEM_WIDTH * 0.8}px;
  text-transform: uppercase;
  transform: translateX(${width}px)
`;