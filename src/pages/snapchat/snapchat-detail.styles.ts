import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const SnapchatDetailContainer = styled(Animated.View)`
  flex: 1;
  background-color: transparent;
`;

export const SnapchatDetailImage = styled(Animated.Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').height}px;
  resize-mode: cover;
`