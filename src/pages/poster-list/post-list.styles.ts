import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;

export const PostListWrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #FFF;
`

export const PostListContainer = styled.View`
  height: ${OVERFLOW_HEIGHT};
  overflow: hidden;
`;


export const PostItemTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -1;
`;

export const PostItemContainer = styled.View`
  height: ${OVERFLOW_HEIGHT}px;
  padding: ${SPACING * 2}px;
`

export const PostItemContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PostItemContentDate = styled.Text`
  font-size: 12px;
`

export const PostItemContentLocation = styled.Text`
  font-size: 12px;
`