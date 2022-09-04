import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const BannerListContainer = styled.View`
  flex: 1;
  background-color: #fff;
  position: relative;
  padding-vertical: 42px;
`

export const BannerItem = styled(Animated.View)`
  position: absolute;
  border-radius: 8px;
  overflow: hidden;
`;

export const BannerListContent = styled.View`
  height: 50px;
  overflow: hidden;
`;

export const BannerListContentTitle = styled(Animated.Text)`
  font-size: 36px;
  align-self: center;
  height: 50px;
`
