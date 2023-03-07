import styled from "styled-components/native";
import { SPACING } from "../../../travel/travel";
import { Dimensions } from 'react-native';
import { Animated } from "react-native";

const { width } = Dimensions.get('screen');

export const MOVIE_ITEM_SIZE = width * 0.72;
export const MOVIE_SPACING = 10;
export const MOVIE_ITEM_SPACER_SIZE = (width - MOVIE_ITEM_SIZE) / 2;

export const MovieItemContainer = styled.View`
  width: ${MOVIE_ITEM_SIZE}px;
  align-self: flex-start;
`

export const MovieItemContent = styled(Animated.View)`
  margin-horizontal: ${MOVIE_SPACING}px;
  padding: ${SPACING * 2}px;
  align-items: center;
  background-color: white;
  border-radius: 34px;
`

export const MovieItemContentImage = styled.Image`
  width: 100%;
  height: ${MOVIE_ITEM_SIZE * 1.2}px;
  resize-mode: cover;
  border-radius: 24px;
  margin: 0;
  margin-bottom: 10px;
`;

export const MovieItemContentTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 24px;
`

export const MovieItemContentDescription = styled.Text.attrs({
  numberOfLines: 3
})`
  font-size: 12px;
`