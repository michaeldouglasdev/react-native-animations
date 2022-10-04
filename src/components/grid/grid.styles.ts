import styled, { css } from 'styled-components/native';

type JustifyContent = 'center' | 'space-between' | 'flex-start' | 'flex-end' | 'space-around' | 'space-evenly';
type AlignItems = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
type AlignSelf = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';

interface BoxProps {
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  noSpacing?: boolean;
  expanded?: boolean;
  background?: boolean;
}

type VBoxProps = BoxProps;
interface HBoxProps extends BoxProps {
  wrap?: boolean;
  noSpacing?: boolean;
}
export const VBox = styled.View<VBoxProps>`
  padding-horizontal: ${({noSpacing}) => noSpacing ? 0 : 16}px;
  justify-content: ${({justifyContent}) =>
    justifyContent ?? 'flex-start'};
  align-items: ${({alignItems}) => alignItems ?? 'stretch'};
  align-self: ${({alignSelf}) => alignSelf ?? 'stretch'};

  ${({expanded}) =>
    expanded &&
    css`
      flex: 1;
    `}

  ${({background}) =>
    background &&
    css`
      background: #F5F7FA;
    `}
`;

export const HBox = styled.View<HBoxProps>`
  flex-direction: row;
  justify-content: ${({justifyContent}) =>
    justifyContent ?? 'flex-start'};
  align-items: ${({alignItems}) => alignItems ?? 'stretch'};
  flex-wrap: ${({wrap}) => (wrap ? 'wrap' : 'nowrap')};
  align-content: flex-start;
  align-self: ${({alignSelf}) => alignSelf ?? 'stretch'};

  ${({expanded}) =>
    expanded &&
    css`
      flex: 1;
    `}
`;

export const VDivider = styled.View`
  height: 1px;
  background: #efefef;
  margin-top: 16px;
  margin-bottom: 16px;
`;


interface VSeparatorProps {
  size: 'small' | 'medium' | 'large'
}

enum VSeparatorSize {
  SMALL = 8,
  MEDIUM = 16,
  LARGE = 32,
}
export const VSeparator = styled.View<VSeparatorProps>`
  height: ${({ size}) => VSeparatorSize[size.toLocaleUpperCase()]}px;
`;
