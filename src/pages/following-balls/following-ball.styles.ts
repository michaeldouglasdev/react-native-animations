import Reanimated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const BALL_SIZE = 80;
export const FollowingBallContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

interface FollowingBallItemProps {
  background: 'blue' | 'red' | 'green'
}
export const FollowingBallItem = styled(Reanimated.View)<FollowingBallItemProps>`
  position: absolute;
  height: ${BALL_SIZE}px;
  aspect-ratio: 1;
  background-color: ${({ background }) => background};
  border-radius: ${BALL_SIZE / 2}px;
  opacity: 0.8;
`