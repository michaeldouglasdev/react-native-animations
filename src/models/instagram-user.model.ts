export interface InstagramUserModel {
  id: string;
  username: string;
  image: string;
  stories: InstagramUserStoryModel[]
}

export interface InstagramUserStoryModel {
  id: string;
  duration: number;
  image: string;
}