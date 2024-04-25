import React, {useCallback, useState} from 'react';
import {Switch, Text} from 'react-native';
import {CircularCarousel} from '../../components/circular-carousel/circular-carousel';
import {
  CircularCarouselPageContainer,
  CircularCarouselSwitchLabel,
} from './circular-carousel.page.styles';

const data = [
  'https://images.unsplash.com/photo-1692855677202-3d106c3e8517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3328&q=80',
  'https://images.unsplash.com/photo-1692855676269-487641edd584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
  'https://images.unsplash.com/photo-1692969960395-42cd03fffe82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3328&q=80',
  'https://images.unsplash.com/photo-1612638345449-e8a367b5fa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  'https://images.unsplash.com/photo-1692969959077-7b16772805c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3328&q=80',
  'https://images.unsplash.com/photo-1692855676120-dc7096ada76d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3328&q=80',
  'https://images.unsplash.com/photo-1612895680717-c4e6fb54c868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2624&q=80',
  'https://images.unsplash.com/photo-1624743043535-67f0d30c55b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
  'https://images.unsplash.com/photo-1615463204303-c3c22bac1642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
];

export const CircularCarouselPage: React.FC = () => {
  const [scaleEnabled, setScaleEnabled] = useState(false);

  const onToggleSwitch = useCallback((value: boolean) => {
    setScaleEnabled(value);
  }, []);

  return (
    <CircularCarouselPageContainer>
      <CircularCarouselSwitchLabel>Scale</CircularCarouselSwitchLabel>
      <Switch
        trackColor={{
          false: '#ccc',
          true: '#111',
        }}
        value={scaleEnabled}
        onValueChange={onToggleSwitch}
      />

      <CircularCarousel data={data} scaleEnabled={scaleEnabled} />
    </CircularCarouselPageContainer>
  );
};
