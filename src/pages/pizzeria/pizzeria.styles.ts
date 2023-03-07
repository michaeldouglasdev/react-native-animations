import styled from 'styled-components/native';

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