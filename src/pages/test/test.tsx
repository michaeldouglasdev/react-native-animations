import React from 'react';
import {SafeAreaView} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export const TestPage: React.FC = () => {
  const scale = useSharedValue(0.5);

  const handlePress = () => {
    scale.value = withRepeat(
      withSequence(
        withTiming(2.5, {duration: 600}),
        withDelay(200, withTiming(2, {duration: 600})),
      ),
      -1,
      true,
    );
  };

  const handlePress2 = () => {
    cancelAnimation(scale);
  };

  const styles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'cyan',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View
          style={[
            styles,
            {
              height: 100,
              width: 100,
              backgroundColor: 'red',
              borderRadius: 24,
            },
          ]}></Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={handlePress2}
        style={{
          height: 300,
          width: 300,
          marginTop: 200,
          backgroundColor: 'blue',
        }}></TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
