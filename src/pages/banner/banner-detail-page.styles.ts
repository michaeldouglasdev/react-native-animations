import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
const { width } = Dimensions.get('screen');

export const BannerDetailPageContainer = styled.View`
  flex: 1;
`

export const BannerDetailImage = styled.Image`
  flex: 1;
  resize-mode: cover;
`;

export const BannerDetailContent = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  background-color: white;
  bottom: 0;
`;

export const BannerDetailContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 16px;
  padding-horizontal: 32px;
`;

export const BannerDetailContentHeaderTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  max-width: ${width - 64 - 16 - 100}px;
`;

interface BannerDetailContentHeaderInterestedButtonProps {
  active: boolean;
}
export const BannerDetailContentHeaderInterestedButton = styled(Animated.View)<BannerDetailContentHeaderInterestedButtonProps>`
  position: absolute;
  right: 32px;
  top: 0;
  background-color: ${({ active }) => active ? '#0d0' : '#222'};
  border-radius: 8px;
  padding-vertical: 16px;
  align-self: flex-start;
  width: 100px;
  backface-visibility: hidden;
`;

export const BannerDetailContentHeaderInterestedButtonText = styled.Text`
  color: white;
  font-size: 14px;
  align-self: center;
  font-weight: bold;
`;

export const BannerDetailContentAddressWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  padding-horizontal: 32px;
`

export const BannerDetailContentAddress = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin-left: 6px;
`;

export const BannerDetailContentDate = styled.Text`
  font-size: 14px;
  color: black;
  font-weight: bold;
  padding-horizontal: 32px;
`;

export const BannerDetailContentFooter = styled.View`
  flex-direction: row;
  padding: 24px 48px;

  margin-top: 16px;

  justify-content: space-between;

  border-top-width: 1px;
  border-top-color: #ddd;
`;

export const BannerDetailContentFooterAddToCalendar = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: bold;
`;

export const BannerDetailContentFooterKnowMore = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: #0d0;
`;