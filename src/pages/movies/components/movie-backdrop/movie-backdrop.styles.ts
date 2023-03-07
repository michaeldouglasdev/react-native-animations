import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MaskedView from '@react-native-community/masked-view';

const { width, height } = Dimensions.get('screen');
const MOVIE_BACKDROP_HEIGHT = height * 0.6;

export const MovieBackdropContainer = styled.View`
  position: absolute;
  top: 0;
  width: ${width}px;
  height: ${MOVIE_BACKDROP_HEIGHT}px;
`;

export const MovieBackdropMaskedView = styled(MaskedView)`
  position: absolute;
`;

export const MovieBackdropMaskedViewImage = styled.Image`
  width: ${width}px;
  height: ${MOVIE_BACKDROP_HEIGHT}px;
  resize-mode: cover;
`;