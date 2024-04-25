import { Dimensions as DimensionsRN } from 'react-native';

export class Dimensions {
  static get width(): number {
    return DimensionsRN.get('screen').width;
  }
  static get height(): number {
    return DimensionsRN.get('screen').height;
  }
}