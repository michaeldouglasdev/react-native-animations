import React, {useEffect, useRef} from 'react';
import {
  Animated,
  LayoutChangeEvent,
  PanResponder,
  TouchableWithoutFeedback,
  View,
  _ScrollView,
} from 'react-native';
import {
  BottomSheetBody,
  BottomSheetOverlay,
  BottomSheetScrollView,
  BottomSheetWrapper,
  MaxBottomSheetWrapperHeight,
} from './bottomsheet.styles';
import {BottomSheetHeader} from './components/bottomsheet-header/bottomsheer-header';
interface BottomSheetProps {
  isVisible: boolean;
  title?: string;
  onClose: () => void;
  maxHeight?: number;
  children: React.ReactElement | React.ReactElement[];
}

const slideDuration = 300;
const moveThreshold = 0.3;

export const BottomSheet: React.FC<BottomSheetProps> = ({
  title,
  maxHeight,
  onClose,
  isVisible,
  children,
}) => {
  const maxHeightBottomSheet = maxHeight || MaxBottomSheetWrapperHeight;
  const translateY = useRef(new Animated.Value(maxHeightBottomSheet)).current;

  let bottomSheetHeight = useRef<number>(0).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_event, _gesture) => {
      return true;
    },

    onPanResponderMove: (_event, gesture) => {
      const y = Math.max(0, gesture.dy);
      translateY.setValue(y);
    },

    onPanResponderRelease: async (_event, gesture) => {
      const shouldClose = gesture.dy >= bottomSheetHeight * moveThreshold;
      const y = shouldClose ? bottomSheetHeight : 0;
      await spring(y);

      if (shouldClose) {
        handleClose();
      }
    },
  });

  const spring = (yValue: number) => {
    return new Promise(resolve =>
      Animated.spring(translateY, {
        toValue: yValue,
        speed: 5,
        overshootClamping: true,
        useNativeDriver: true,
      }).start(resolve),
    );
  };

  useEffect(() => {
    if (isVisible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: slideDuration,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  const onLayout = (event: LayoutChangeEvent) => {
    bottomSheetHeight = event.nativeEvent.layout.height;
  };

  const handleOverlay = async () => {
    await spring(bottomSheetHeight);
    handleClose();
  };

  const handleClose = async () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isVisible ? (
        <>
        <BottomSheetOverlay>
          <TouchableWithoutFeedback onPress={handleOverlay}>
            <View style={{flex: 1}}></View>
          </TouchableWithoutFeedback>

          <BottomSheetWrapper
            onLayout={onLayout}
            maxHeight={maxHeight}
            style={{
              transform: [
                {
                  translateY,
                },
              ],
            }}>
            <BottomSheetHeader title={title} panResponder={panResponder} />

            <BottomSheetBody>
              <BottomSheetScrollView
                maxHeight={maxHeightBottomSheet}
                alwaysBounceVertical={false}>
                {children}
              </BottomSheetScrollView>
            </BottomSheetBody>
          </BottomSheetWrapper>
        </BottomSheetOverlay>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
