import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Card1 from "../../../../assets/images/card1.png"
import Card2 from "../../../../assets/images/card2.png"
import Card3 from "../../../../assets/images/card3.png"
import Card4 from "../../../../assets/images/card4.png"
import Card5 from "../../../../assets/images/card5.png"
import Card6 from "../../../../assets/images/card6.png";
import { CreditCardModel } from "../../../models/credit-card.model";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});

interface CreditCardProps {
  creditCard: CreditCardModel;
}

export const CreditCardImage: React.FC<CreditCardProps> = ({ creditCard }) => {
  let source: number;
  switch (creditCard) {
    case CreditCardModel.CreditCardModel1:
      source = Card1
      break;
    case CreditCardModel.CreditCardModel2:
      source = Card2;
      break;
    case CreditCardModel.CreditCardModel3:
      source = Card3;
      break;
    case CreditCardModel.CreditCardModel4:
      source = Card4;
      break;
    case CreditCardModel.CreditCardModel5:
      source = Card5;
      break;
    case CreditCardModel.CreditCardModel6:
      source = Card6;
      break;
    default:
      source = Card4;
      break;
  }
  return <Image style={styles.card} {...{ source }} />;
};
