import { ImageSourcePropType } from "react-native";

export interface StoryModel {
  id: string;
  thumb: ImageSourcePropType;
  user: string;
  avatar: string;
  video?: string;
}