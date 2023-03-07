import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const FoodCardContainer = styled.View`
  border: 1px solid #eee;
`

export const FoodCardContent = styled.View`
  flex: 1;
  padding: 12px 16px;
  justify-content: space-between;
`

export const FoodCardTitle = styled.Text`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const FoodCardDescription = styled.Text.attrs({
  numberOfLines: 2
})`
  font-size: 12px;
  color: #999;
`

export const FoodCardPrice = styled.Text`
  font-weight: bold;
  font-size: 12px;

  color: #e00;
`;

export const FoodCardImageWrapper = styled.View`
  width: 30%;
  height: ${height * 0.12}px;
`

export const FoodCardImage = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100%;
  height: 100%;
`