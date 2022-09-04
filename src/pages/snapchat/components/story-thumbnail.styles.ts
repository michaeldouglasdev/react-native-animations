import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const margin = 16;
const width = Dimensions.get("window").width / 2 - margin * 2;


export const StoryThumbnailImageWrapper = styled.View`
  border-radius: 5px;
  height: ${width * 1.77}px;
  width: ${width}px;
  margin-top: ${margin}px;
`

export const StoryThumbnailImage = styled(Animated.Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: undefined;
  height: undefined;
  border-radius: 5px;
  resize-mode: cover;
`;