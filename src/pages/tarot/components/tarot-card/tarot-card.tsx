import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { GestureDetector, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { Easing, SharedValue, useAnimatedGestureHandler, useAnimatedReaction, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import { snapPoint } from 'react-native-redash';
import { TarotCardContainer, TarotCardImage, TarotCardImageWrapper, TAROT_CARD_WIDTH } from './tarot-card.styles';

interface TarotCardProps {
  image: string;
  index: number;
  shuffleBack: SharedValue<boolean>;
}
type PanGestureHandlerGestureEventContext = {
  x: number;
  y: number;
}
const { width, height } = Dimensions.get('screen');
const side = (width + TAROT_CARD_WIDTH + 70) / 2;
const SNAP_POINT = [-side, 0, side];
const DURATION = 250;

console.log('side', side)

export const TarotCard: React.FC<TarotCardProps> = ({
  image,
  index,
  shuffleBack,
}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(-height);
  const rotateZ = useSharedValue(0);
  const scale = useSharedValue(1);
  const theta = Math.random() * 20 - 10;

  useAnimatedReaction(() => shuffleBack.value, () => {
    if (shuffleBack.value) {
      const delay = 150 * index;

      translateX.value = withDelay(delay, withSpring(0));
      rotateZ.value = withDelay(delay, withSpring(theta, {}, () => {
        shuffleBack.value = false;
      }));
    }
  })

  useEffect(() => {
    const delay = index * DURATION;

    translateY.value = withDelay(delay, withTiming(0, {
      duration: DURATION,
      easing: Easing.inOut(Easing.ease)
    }));

    rotateZ.value = withDelay(delay,
      withTiming(theta, {
        duration: DURATION,
        easing: Easing.inOut(Easing.ease)
      })
    )
  }, []);

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, PanGestureHandlerGestureEventContext>({
    onStart: (_, context) => {
      context.x = translateX.value;
      context.y = translateY.value;
      scale.value = withTiming(1.1, { easing: Easing.inOut(Easing.ease) });
      rotateZ.value = withTiming(0, { easing: Easing.inOut(Easing.ease) });
    },
    onActive: ({ translationX, translationY }, context) => {
      translateX.value = context.x + translationX;
      translateY.value = context.y + translationY;
    },
    onEnd: ({ velocityX, velocityY }) => {
      const dest = snapPoint(translateX.value, velocityX, SNAP_POINT);
      translateX.value = withSpring(dest, { velocity: velocityX });
      translateY.value = withSpring(0, { velocity: velocityY });
      scale.value = withTiming(1, { easing: Easing.inOut(Easing.ease) }, () => {
        if (index === 0 && dest !== 0) {
          shuffleBack.value = true;
        }
      });
    }
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateX: '30deg'
        },
        {
          rotateZ: `${rotateZ.value}deg`
        },
        {
          translateX: translateX.value
        },
        {
          translateY: translateY.value
        },
        {
          scale: scale.value
        }
      ]
    }
  });

  return (
    <TarotCardContainer style={[rStyle, { zIndex: index }]}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <TarotCardImageWrapper>
          <TarotCardImage
            source={image}
          />
        </TarotCardImageWrapper>
      </PanGestureHandler>
    </TarotCardContainer>
  )
}