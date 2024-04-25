import { ImageSourcePropType } from "react-native";

export interface SnapchatStoryModel {
  id: string;
  thumb: ImageSourcePropType;
  user: string;
  avatar: string;
  video?: string;
}