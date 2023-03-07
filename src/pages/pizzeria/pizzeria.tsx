import React, { useEffect, useState } from 'react';
import { PizzeriaContainer, PizzeriaHeader, PizzeriaHeaderImage } from './pizzeria.styles';
import PizzeriaWallpaper from '../../../assets/images/pizzeria-wallpaper.jpeg';
import PizzeriaWallpaper2 from '../../../assets/images/pizzeria-wallpaper-2.jpeg';
import { getFakeFoods } from '../../utils/get-fake-foods.util';
import { FoodCard } from './components/food-card/food-card';
import { VSeparator } from '../../components/grid/grid.styles';
import { Tabs } from '../../components/tabs/tabs';
import { TabItem } from '../../components/tabs/components/tab-item/tab-item';
import { Text, View } from 'react-native';
import Animated, { interpolate, Layout, SlideInLeft, SlideInRight, useAnimatedStyle, useSharedValue, withDelay } from 'react-native-reanimated';
import { FoodModel } from '../../models/food.model';

export const PizzeriaPage: React.FC = () => {

  const [foods, setFoods] = useState<FoodModel[]>([]);
  const [scrollX, setScrollX] = useState(0);
  const translateX = useSharedValue(0);

  useEffect(() => {
    setFoods(getFakeFoods());
  }, []);

  const handleScroll = (scroll) => {
    console.log('handle', scroll)
    setScrollX(scroll)
  }
  return (
    <PizzeriaContainer>
      <PizzeriaHeader>
        <PizzeriaHeaderImage
          source={PizzeriaWallpaper2}
        />
      </PizzeriaHeader>

      <Tabs
        onScroll={handleScroll}
      >
        <TabItem title='titulo 1'>
          <View>
            {foods.map((item, index) => (
              <Animated.View
                entering={SlideInRight.delay(300 * index)}
                key={`wrapper-food-card-${index}`}
                style={{

                }}
              >
                <FoodCard
                  food={item}
                />

                <VSeparator />
                <VSeparator />

              </Animated.View>
            ))}
          </View>
        </TabItem>
        <TabItem title='titulo 2'>
          <View>
            {foods.map((item, index) => (
              <View key={`wrapper-food-card-2-${index}`}>
                <FoodCard
                  key={index}
                  food={item}
                />

                <VSeparator />
                <VSeparator />

              </View>
            ))}
          </View>
        </TabItem>
      </Tabs>

    </PizzeriaContainer>
  )
}