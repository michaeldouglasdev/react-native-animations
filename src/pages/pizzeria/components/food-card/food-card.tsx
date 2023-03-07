import React from 'react';
import { View } from 'react-native';
import { HBox, VBox } from '../../../../components/grid/grid.styles';
import { FoodModel } from '../../../../models/food.model';
import { FoodCardContainer, FoodCardContent, FoodCardDescription, FoodCardImage, FoodCardImageWrapper, FoodCardPrice, FoodCardTitle } from './food-card.styles';

interface FoodCardProps {
  food: FoodModel
}
export const FoodCard: React.FC<FoodCardProps> = ({
  food
}) => {
  return (
    <FoodCardContainer>
      <HBox>
       <FoodCardContent>
        <View>
          <FoodCardTitle>{food.name}</FoodCardTitle>
          <FoodCardDescription>{food.description}</FoodCardDescription>
        </View>
        <FoodCardPrice>$ {food.price}</FoodCardPrice>
       </FoodCardContent>
       <FoodCardImageWrapper>
        <FoodCardImage source={{uri: food.image}}/>
       </FoodCardImageWrapper>
      </HBox>
    </FoodCardContainer>
  )
}