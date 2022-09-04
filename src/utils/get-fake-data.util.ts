import { faker } from '@faker-js/faker';
import { UserModel } from '../models/user.model';


export const getFakeData = (): UserModel[] => {
  return Array.from({ length: 30}).map(_ => createRandomUser());
}

const createRandomUser = (): UserModel => {
  return {
    key: faker.datatype.uuid(),
    //username: faker.internet.userName(),
    email: faker.internet.email(),
    image: faker.image.avatar(),
    jobTitle: faker.name.jobTitle(),
    name: faker.name.firstName(),
  };
}