import {
  Circle,
  Group,
  Path,
  Skia,
  SweepGradient,
  type Vector,
  Shadow,
  PathOp,
  Shader,
  Fill,
  mixColors,
} from '@shopify/react-native-skia';
import React, {useEffect, useMemo} from 'react';
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {frag} from '../../../utils/shader/shader';

const source = frag`
uniform shader image;


vec2 rotate(in vec2 coord, in float angle, vec2 origin) {
  vec2 coord1 = coord - origin;
  vec2 rotated = coord1 * mat2( cos(angle), -sin(angle),
                       sin(angle),  cos(angle));
  return rotated + origin;
 }

vec4 main(vec2 xy) {
  return image.eval(xy);
}
`;

const fromCircle = (center: Vector, r: number) => {
  'worklet';
  return Skia.XYWHRect(center.x - r, center.y - r, r * 2, r * 2);
};

interface AppleRingItemProps {
  ring: AppleRingRingProps;
  center: Vector;
  strokeWidth: number;
}

interface AppleRingRingProps {
  colors: string[];
  background: string;
  size: number;
  totalProgress: number;
}

export const AppleRingItem: React.FC<AppleRingItemProps> = ({
  center,
  strokeWidth,
  ring: {size, background, totalProgress, colors},
}) => {
  return (
    <Group>
      <Fill color={background} />
    </Group>
  );
};
