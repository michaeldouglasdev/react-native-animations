import { faker } from "@faker-js/faker"
import { FoodModel } from "../models/food.model"

export const getFakeFoods = (): FoodModel[] => {
  const data: FoodModel[] = Array.from({ length: 3}).map(_ => createFood());

  return data;
}

const createFood = (): FoodModel => {
  const data: FoodModel = {
    name: 'Cheese Pizza',
    description: faker.random.words(20),
    image: faker.image.food(),
    price: parseInt(faker.random.numeric(4)) / 100,
  }

  return data;
}