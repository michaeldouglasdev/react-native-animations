import React from 'react';
import {Animated, PanResponderInstance} from 'react-native';
import {
  BottomSheedHeaderTitle,
  BottomSheetHeaderContainer,
  BottomSheetHeaderDragIndicator,
} from './bottomsheet-header.styles';

type BottomSheetHeaderProps = {
  title?: string;
  panResponder?: PanResponderInstance;
};
export const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({
  title,
  panResponder,
}) => {
  return (
    <BottomSheetHeaderContainer
      as={Animated.View}
      {...panResponder?.panHandlers}>
      <BottomSheetHeaderDragIndicator />
      <BottomSheedHeaderTitle>
        {title}
      </BottomSheedHeaderTitle>
    </BottomSheetHeaderContainer>
  );
};
