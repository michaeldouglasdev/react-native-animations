import { Dimensions, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native'

const { width } = Dimensions.get('screen');
const SCREEN_WIDTH_ROUNDED = Math.round(width);

export const TabsContainer = styled.View`
flex: 1;
`;

export type TabsHeaderStyle = StyleProp<ViewStyle> & {
  text?: TabsHeaderTextStyle;
}
export type TabsHeaderTextStyle = StyleProp<TextStyle> & {
  activeColor: string;
  inactiveColor: string;
}
export type TabsStyle = {
  headerStyle?: TabsHeaderStyle;
  scrollIndicatorStyle?: StyleProp<ViewStyle>;
  scrollIndicatorContainerStyle?: StyleProp<ViewStyle>;
}

export const TabsHeader = styled.View<TabsHeaderStyle>`
  flex-direction: row;
`

export const TabsScrollIndicatorWrapper = styled.View`
  background-color: #eee;
`;

interface TabsScrollIndicatorProps {
  numberOfTabs: number;
  color?: string;
}
export const TabsScrollIndicator = styled(Animated.View)<TabsScrollIndicatorProps>`
  height: 1.8px;
  width: ${({ numberOfTabs }) => Math.round(SCREEN_WIDTH_ROUNDED / numberOfTabs)}px;
  background-color: ${({ color}) => color ?? '#e00'};
`;

export const TabsHeaderItem = styled.TouchableOpacity`
  padding-horizontal: 12px;
  flex: 1;
`

interface TabsHeaderItemTextProps {
  active: boolean;
  activeTextColor: string;
  inactiveTextColor: string;
}
export const TabsHeaderItemText = styled.Text<TabsHeaderItemTextProps>`
  align-self: center;
  color: ${(props) => getTabsHeaderItemTextColor(props)};
  padding-vertical: 16px;
  text-transform: capitalize;
`

export const TabsContent = styled(Animated.View)`
  flex-direction: row;
`;

export const TabsContentItem = styled.View`
  width: 100%;
`

const getTabsHeaderItemTextColor = (props: TabsHeaderItemTextProps) => {
  const { active, activeTextColor, inactiveTextColor} = props;

  if (active) {
    return activeTextColor ?? '#e00';
  } else {
    return inactiveTextColor ?? '#555';
  }
}