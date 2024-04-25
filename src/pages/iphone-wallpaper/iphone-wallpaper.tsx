import {
  Canvas,
  Fill,
  Group,
  interpolate,
  LinearGradient,
  Mask,
  rect,
  Rect,
  Shadow,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {View} from 'react-native';
import {useWindowDimensions} from 'react-native';

const length = 9;
const STRIPES = Array.from({length: 9}).map((_, i) => i);

export const IPhoneWallpaper: React.FC = () => {
  const {height, width: wWidth} = useWindowDimensions();
  const width = wWidth / length;
  const origin = vec(width / 2, height / 2);

  return (
    <Canvas style={{flex: 1}}>
      <Fill>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(0, height)}
          colors={['#1A0049', '#2F0604']}
        />
      </Fill>

      <Group>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(0, height)}
          colors={['#5a3ec3', '#eba5c5', '#e1d4b7', '#e9b74c', '#cf1403']}
        />
        <Shadow dx={0} dy={0} blur={20} color={'black'} />
        {STRIPES.map((_, i) => {
          return (
            <Group
              origin={origin}
              transform={[
                {
                  scaleY: interpolate(
                    i,
                    [0, (length - 1) / 2, length - 1],
                    [1, 0.61, 1],
                  ),
                },
              ]}>
              <Mask
                mask={
                  <Rect rect={rect(i * width, 0, width, height)}>
                    <LinearGradient
                      start={vec(0, 0)}
                      end={vec(0, height)}
                      colors={['transparent', 'black', 'black', 'transparent']}
                    />
                  </Rect>
                }>
                <Rect key={i} rect={rect(i * width, 0, width, height)} />
              </Mask>
            </Group>
          );
        })}
      </Group>
    </Canvas>
  );
};
