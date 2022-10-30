import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import Svg from 'react-native-svg'

const AnimatedSvg = Animated.createAnimatedComponent(Svg)

export const BottomBarContainer = styled.View`
  background-color: white;
  position: relative;
  border-radius: 36px;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  margin-horizontal: 12px;
  margin-bottom: 24px;
`;

export const BottomBarActiveBackground = styled(AnimatedSvg)`
  position: absolute;
`;

export const BottomBarContent = styled.View`
  flex-direction: row;
  justify-content: space-evenly;

`;