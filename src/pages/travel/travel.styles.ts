import { Animated, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { ITEM_WIDTH, SPACING } from './travel';

export const TravelListContainer = styled(SafeAreaView)`
  flex: 1;
`;

export const TravelItemLocation = styled(Animated.Text)`
  font-size: 30px;
  color: #fff;
  font-weight: 800;
  width: ${ITEM_WIDTH * 0.8}px;
  text-transform: uppercase;
  position: absolute;
  top: ${SPACING * 2}px;
  left: ${SPACING * 2}px;
  align-self: flex-start;
`;

export const TravelItemDay = styled.View`
  position: absolute;
  bottom: ${SPACING}px;
  left: ${SPACING}px;
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: tomato;
  justify-content: center;
  align-items: center;
`

export const TravelItemDayValues = styled.Text`
  font-weight: 800;
  color: #fff;
  font-size: 18px;
`

export const TravelItemDayLabel = styled.Text`
  color: #fff;
  font-size: 10px;
`