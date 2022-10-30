import React, { useState } from "react";
import { StatusBar } from "react-native";
import { getFakeLiquidSwipeFoods } from "../../utils/get-fake-liquid-swipe-foods";
import { LiquidSwipeSlide } from "./components/liquid-swipe-slide";
import { LiquidSwipeSlider } from "./components/liquid-swipe-slider/liquid-swipe-slider";

export const LiquidSwipePage: React.FC = () => {
  const foods = getFakeLiquidSwipeFoods();

  const [index, setIndex] = useState(1);
  const prev = foods[index - 1];
  const next = foods[index + 1];

  return (
    <>
      <StatusBar barStyle='light-content' />

      <LiquidSwipeSlider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={prev && <LiquidSwipeSlide slide={prev} />}
        next={next && <LiquidSwipeSlide slide={next} />}
      >

        <LiquidSwipeSlide slide={foods[index]!} />
      </LiquidSwipeSlider>
    </>
  );
};
