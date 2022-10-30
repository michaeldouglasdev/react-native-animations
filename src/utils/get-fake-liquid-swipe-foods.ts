import { LiquidSwipeFoodModel } from "../models/liquid-swipe-food.model"
import LiquidSwipeFood1 from '../../assets/images/liquid-swipe/1.png';
import LiquidSwipeFood2 from '../../assets/images/liquid-swipe/2.png';
import LiquidSwipeFood3 from '../../assets/images/liquid-swipe/3.png';
import LiquidSwipeFood4 from '../../assets/images/liquid-swipe/4.png';
import LiquidSwipeFood5 from '../../assets/images/liquid-swipe/5.png';

export const getFakeLiquidSwipeFoods = (): LiquidSwipeFoodModel[] => {
  const data: LiquidSwipeFoodModel[] = [
    {
      color: "#F2A1AD",
      title: "Dessert Recipes",
      description:
        "Hot or cold, our dessert recipes can turn an average meal into a memorable event",
      picture: LiquidSwipeFood1
    },
    {
      color: "#0090D6",
      title: "Healthy Foods",
      description:
        "Discover healthy recipes that are easy to do with detailed cooking instructions from top chefs",
      picture: LiquidSwipeFood5
    },
    {
      color: "#69C743",
      title: "Easy Meal Ideas",
      description:
        "explore recipes by food type, preparation method, cuisine, country and more",
      picture: LiquidSwipeFood4
    },
    {
      color: "#FB3A4D",
      title: "10000+ Recipes",
      description:
        "Browse thousands of curated recipes from top chefs, each with detailled cooking instructions",
      picture: LiquidSwipeFood2
    },
    {
      color: "#F2AD62",
      title: "Video Tutorials",
      description:
        "Browse our best themed recipes, cooking tips, and how-to food video & photos",
      picture: LiquidSwipeFood3
    },
  ];

  return data;
}