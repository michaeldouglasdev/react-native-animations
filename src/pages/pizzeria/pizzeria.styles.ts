import { TabsStyle } from './../../components/tabs/tabs.styles';
import styled from 'styled-components/native';
import { Tabs } from '../../components/tabs/tabs';

export const PizzeriaContainer = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;

export const PizzeriaHeader = styled.View`
  height: 30%;
`

export const PizzeriaHeaderImage = styled.Image.attrs({
  resizeMode: 'cover'
})`
  height: 100%;
  width: 100%;
`;

export const PizzeriaTabs = styled(Tabs).attrs<{}, TabsStyle>({
  headerStyle: {
    text: {
      activeColor: "#00788B",
      inactiveColor: "#9398ab",
      fontSize: 14,
      fontWeight: "700",
      textTransform: "capitalize",
    }
  },
})`

`