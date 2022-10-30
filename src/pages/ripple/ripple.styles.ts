import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const RippleContainer = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RippleButtonWrapper = styled.View`
  background-color: #fff;
  border-radius: 25px;

  shadow-opacity: 0.2;
  shadow-offset: 0px 0px;
  shadow-radius: 20px;

  elevation: 2;
`
export const RippleButton = styled.View`
  border-radius: 25px;
  position: relative;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const RippleEffect = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
`;