import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const BottomSheetOverlay = styled(Animated.View)`
  background-color: #181b25a3;
  position: absolute;
  top: -44px;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const MaxBottomSheetWrapperHeight = 300;

type BottomSheetWrapperProps = {
  maxHeight?: number;
};

export const BottomSheetWrapper = styled(
  Animated.View,
)<BottomSheetWrapperProps>`
  width: 100%;
  background-color: #fff;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  min-height: 145px;
  max-height: ${({maxHeight}) => maxHeight || MaxBottomSheetWrapperHeight}px;
`;

export const BottomSheetBody = styled.View`
  padding: 16px 24px;
`;

type BottomSheetScrollViewProps = {
  maxHeight: number;
};
export const BottomSheetScrollView = styled.ScrollView.attrs({
  alwaysBounceVertical: false,
})<BottomSheetScrollViewProps>`
  max-height: ${({maxHeight}) => maxHeight - 120}px;
`;
