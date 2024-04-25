import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { Dimensions } from '../../../utils/dimensions';

export const USER_STORY_WIDTH = Dimensions.width;
export const USER_STORY_HEIGHT = Dimensions.height;

export const UserStoryContainer = styled(Animated.View)`
  width: ${USER_STORY_WIDTH}px;
  height: ${USER_STORY_HEIGHT}px;
  background-color: red;
  border: 1px solid blue;
`;

export const UserStoryImage = styled.Image`
  width: ${USER_STORY_WIDTH}px;
  height: ${USER_STORY_HEIGHT}px;
  resize-mode: cover;
`;