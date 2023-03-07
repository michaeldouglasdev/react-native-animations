import styled from 'styled-components/native';

export const MovieGenresContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-vertical: 4px;
`;

export const MovieGenresItemWrapper = styled.View`
  padding-horizontal: 6px;
  padding-vertical: 2px;
  border-width: 1px;
  border-radius: 14px;
  border-color: '#ccc';
  margin-right: 4px;
  margin-bottom: 4px;
`

export const MovieGenresItem = styled.Text`
  font-size: 9px;
  opacity: 0.4;
`

