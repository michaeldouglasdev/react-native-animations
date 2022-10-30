import Animated from 'react-native-reanimated';
import styled from 'styled-components/native'

export const TabsContainer = styled.View`

`;

export const TabHeader = styled.View`
  flex-direction: row;
  padding-vertical: 16px;
`

export const TabHeaderItem = styled.View`
  padding-horizontal: 12px;
`

export const TabHeaderItemText = styled.Text`
color: #e00;
text-transform: capitalize;
`

export const TabContent = styled(Animated.View)`
  flex-direction: row;
`;

export const TabContentItem = styled.View`
  width: 100%;
`