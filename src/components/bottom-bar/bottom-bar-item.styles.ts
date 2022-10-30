import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const BottomBarItemContainer = styled(Pressable)`
  height: 60px;
  width: 60px;
  margin-top: -5px;
`;

export const BottomBarItemCircle = styled(Animated.View)`
  flex: 1;
  border-radius: 30px;
  background-color: #fff;
`;

export const BottomBarIconWrapper = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const BottomBarIcon = styled.View`
  height: 36px;
  width: 36px;
`;