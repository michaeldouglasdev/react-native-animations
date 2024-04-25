import { faker } from "@faker-js/faker"
import { InstagramUserModel, InstagramUserStoryModel } from "../models/instagram-user.model"

export const getFakeInstagramUser = (): InstagramUserModel[] => {
  return Array.from({ length: 10}).map(_ => createInstagramUser());
}

const createInstagramUser = (): InstagramUserModel => {
  return {
    id: faker.datatype.uuid(),
    image: faker.image.avatar(),

    stories: Array.from({ length: Math.floor(Math.random() *  5) + 1}).map(_ => createInstagramUserStory()),
    username: faker.name.firstName()

  }
}

const createInstagramUserStory = (): InstagramUserStoryModel => {
  return {
    id: faker.datatype.uuid(),
    image: faker.image.business(),
    duration: Math.random() * 3000 + 1000,
  }
}