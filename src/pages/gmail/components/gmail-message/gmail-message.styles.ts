import { Animated } from 'react-native';
import Reanimated  from'react-native-reanimated'
import styled from 'styled-components/native';
import { getRandomColor } from '../../../../utils/get-random-color.util';
import { PhoneRingItemAnimatedWrapperContainer } from '../../../phone-ring/components/phone-ring-item-animated-wrapper.styles';

export const GmailMessageContainer = styled(Reanimated.View)`

`;

export const GmailMessageContent = styled(Reanimated.View)`
  padding-vertical: 8px;
  flex-direction: row;
  background-color: #121212;
`;

interface GmailMessageAvatarProps {
  background: string;
}
export const GmailMessageAvatar = styled.View<GmailMessageAvatarProps>`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${({ background }) => background ?? getRandomColor()};
  margin-left: 16px;
`;

export const GmailMessageAvatarText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`

export const GmailMessageSender = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`

export const GmailMessageSubject = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
`

export const GmailMessageDescription = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`

export const GmailMessageDate = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`

export const GmailMessageHiddenArea = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00dd66;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 24px;
`;

export const GmailMessageHiddenAreaIconWrapper = styled(Reanimated.View)`

`;