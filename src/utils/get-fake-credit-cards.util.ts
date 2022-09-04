import { CreditCardModel } from "../models/credit-card.model";

export const getFakeCreditCards = () => {

  const creditCards = [
    {
      index: 1,
      type: CreditCardModel.CreditCardModel1
    },
    {
      index: 2,
      type: CreditCardModel.CreditCardModel2
    },
    {
      index: 3,
      type: CreditCardModel.CreditCardModel3
    },
    {
      index: 4,
      type: CreditCardModel.CreditCardModel4
    },
    {
      index: 5,
      type: CreditCardModel.CreditCardModel5
    },
    {
      index: 6,
      type: CreditCardModel.CreditCardModel6
    },
    {
      index: 7,
      type: CreditCardModel.CreditCardModel1
    },
    {
      index: 8,
      type: CreditCardModel.CreditCardModel2
    },
    {
      index: 9,
      type: CreditCardModel.CreditCardModel3
    },
    {
      index: 10,
      type: CreditCardModel.CreditCardModel4
    },
  ];

  return creditCards;
}