import { faker } from "@faker-js/faker";
import { MessageModel } from "../models/message.model";

export const getFakeMessages = (): MessageModel[] => {
  return Array.from({ length: 10}).map(_ => createRandomMessage());
}

export const getFakeMessagesSortByDate = () => {
  return getFakeMessages().sort((a, b) => b.date.getTime() - a.date.getTime());
}

const createRandomMessage = (): MessageModel => {
  return {
    id: faker.random.alphaNumeric(16),
    author: faker.company.name(),
    date: faker.date.recent(5),
    subject: `${faker.company.name()} Newsletter`,
    text: faker.random.words(20),
  }
}