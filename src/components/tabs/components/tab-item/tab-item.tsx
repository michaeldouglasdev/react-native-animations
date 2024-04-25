import React from 'react';

export interface TabItemProps {
  title: string;
  children: React.ReactElement;
}
export const TabItem: React.FC<TabItemProps> = ({children}) => {
  return children;
};
