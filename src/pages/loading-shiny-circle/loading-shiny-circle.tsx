import React from 'react';
import { LoadingShinyCircleContainer } from './loading-shiny-circle.styles';
import { MotiView } from 'moti';

interface LoadingIndicatorProps {
  size: number;
}
export const LoadingShinyCirclePage: React.FC = () => {

  const LoadingIndicator = (loadingIndicatorProps: LoadingIndicatorProps) => {
    const { size } = loadingIndicatorProps;
    return (
      <MotiView
        from={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 0,
          shadowOpacity: 0.1,
        }}
        animate={{
          width: size + 20,
          height: size + 20,
          borderRadius: (size + 20) / 2,
          borderWidth: size / 10,
          shadowOpacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
          loop: true
        }}
        style={{
          borderColor: '#fff',
          shadowColor: '#fff',
          shadowOffset: { width: 0, height: 0 },
        }}
      />
    )
  }
  return (
    <LoadingShinyCircleContainer>
      <LoadingIndicator
        size={100}
      />
    </LoadingShinyCircleContainer>
  )
}