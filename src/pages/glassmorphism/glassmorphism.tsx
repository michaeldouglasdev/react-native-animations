import React, {useMemo} from 'react';
import {
  add,
  BackdropFilter,
  Blur,
  Canvas,
  Circle,
  DisplacementMap,
  Fill,
  LinearGradient,
  mix,
  Offset,
  sub,
  Turbulence,
  useComputedValue,
  useLoop,
  vec,
} from '@shopify/react-native-skia';
import {useWindowDimensions} from 'react-native';

/*
  <Offset x={-10}>
    <DisplacementMap channelX="g" channelY="a" scale={20}>
      <Turbulence freqX={0.01} freqY={0.05} octaves={2} seed={2} />
    </DisplacementMap>
  </Offset>
*/

export const GlassmorphismPage: React.FC = () => {
  const {width, height} = useWindowDimensions();
  const c = vec(width / 2, height / 2);
  const r = c.x - 32;
  const rect = useMemo(
    () => ({x: 0, y: c.y, width, height: c.y}),
    [c.y, width],
  );

  const progress = useLoop({duration: 2000});
  const start = useComputedValue(() => {
    return sub(c, vec(0, mix(progress.current, r, r / 2)));
  }, [progress]);

  const end = useComputedValue(() => {
    return add(c, vec(0, mix(progress.current, r, r / 2)));
  }, [progress]);

  const radius = useComputedValue(() => {
    return mix(progress.current, r, r / 2);
  }, [progress]);

  //const circleR = mix(progress.current, r, r / 2);
  return (
    <Canvas style={{flex: 1}}>
      <Fill color="black" />

      <Circle c={c} r={radius}>
        <LinearGradient
          start={start}
          end={end}
          colors={['#FFF723', '#E70696']}
        />
      </Circle>

      <BackdropFilter filter={<Blur blur={10} />} clip={rect} color={'red'}>
        <Fill color="rgba(0, 0, 0, 0.3)" />
      </BackdropFilter>
    </Canvas>
  );
};
