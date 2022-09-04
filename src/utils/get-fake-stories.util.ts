import { faker } from "@faker-js/faker";
import { StoryModel } from "../models/story.model";
import Story1 from '../../assets/images/stories/story-1.jpeg';
import Story2 from '../../assets/images/stories/story-2.jpg'
import Story3 from '../../assets/images/stories/story-3.jpeg'
import Story4 from '../../assets/images/stories/story-4.jpeg'
import Story5 from '../../assets/images/stories/story-5.jpeg'
import Story6 from '../../assets/images/stories/story-6.jpeg'
import Story7 from '../../assets/images/stories/story-7.jpeg'
import Story8 from '../../assets/images/stories/story-7.mp4'

export const getFakeStories = (): StoryModel[] => {
  const stories: StoryModel[] = [
    {
      id: "2",
      thumb: Story1,
      user: "derek.russel",
      avatar: faker.image.avatar(),
    },
    {
      id: "4",
      thumb: Story2,
      user: "jmitch",
      avatar: faker.image.avatar(),
    },
    {
      id: "7",
      thumb: Story3,
      user: "andrea.schmidt",
      avatar: faker.image.avatar(),
      //video: Story8,
    },
    {
      id: "5",
      thumb: Story4,
      user: "monicaa",
      avatar: faker.image.avatar(),
    },
    {
      id: "3",
      thumb: Story5,
      user: "alexandergarcia",
      avatar: faker.image.avatar(),
    },
    {
      id: "1",
      thumb: Story6,
      user: "andrea.schmidt",
      avatar: faker.image.avatar(),
    },
    {
      id: "6",
      thumb: Story7,
      user: "andrea.schmidt",
      avatar: faker.image.avatar(),
    },
  ]
  return stories;
}