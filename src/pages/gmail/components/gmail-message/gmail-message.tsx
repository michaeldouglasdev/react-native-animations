import React from 'react';
import { HBox, VBox } from '../../../../components/grid/grid.styles';
import { MessageModel } from '../../../../models/message.model';
import { getTextFirstAndLastInitial } from '../../../../utils/text.util';
import { GmailMessageAvatar, GmailMessageAvatarText, GmailMessageContainer, GmailMessageContent, GmailMessageDate, GmailMessageDescription, GmailMessageHiddenArea, GmailMessageHiddenAreaIconWrapper, GmailMessageSender, GmailMessageSubject } from './gmail-message.styles';
import { format, isSameDay, isSameYear } from 'date-fns';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Extrapolate, FadeIn, FadeOut, interpolate, Layout, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerProps } from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen');

interface GmailMessageProps extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  index: number;
  message: MessageModel;
  onDelete: () => void;
}
export const GmailMessage: React.FC<GmailMessageProps> = ({
  index,
  message,
  onDelete,
  simultaneousHandlers
}) => {
  const translateX = useSharedValue(0);
  const isGestureActive = useSharedValue(true);

  const styleGmailMessageContent = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value
        },
      ]
    }
  });

  const styleGmailMessageHiddenAreaIconWrapperLeft = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [0, width * 0.25 - 1, width * 0.25],
      [1, 1, 1.2],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        {
          scale
        }
      ]
    }
  })

  const styleGmailMessageHiddenAreaIconWrapperRight = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [-width * 0.25, -width * 0.25 + 1, 0],
      [1.2, 1, 1],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        {
          scale
        }
      ]
    }
  })
  const handleDeleteMessage = () => {
    onDelete();
  }

  const onGestureEvent = useAnimatedGestureHandler(({
    onStart: () => {
      isGestureActive.value = true;
    },
    onActive: ({ translationX }) => {
      translateX.value = translationX
    },
    onEnd: ({ translationX }) => {
      const dx = Math.abs(translationX);

      if (dx > width * 0.25) {
        translateX.value = withTiming(translationX * 4, {}, () => {
          runOnJS(handleDeleteMessage)();
        });

      } else {
        translateX.value = withTiming(0);
      }
    }
  }));

  const formatDate = (messageDate: Date) => {
    const currentDate = new Date();
    if (isSameDay(currentDate, messageDate)) {
      return format(messageDate, 'h:mm a');
    } else if (isSameYear(currentDate, messageDate)) {
      return format(messageDate, 'MMM dd')
    } else {
      return format(messageDate, 'MM/dd/yyyy')
    }
  }
  return (
    <GmailMessageContainer
      entering={FadeIn.delay(100 * index)}
      exiting={FadeOut}
      layout={Layout.delay(400)}
    >
      <GmailMessageHiddenArea>
        <GmailMessageHiddenAreaIconWrapper
          style={styleGmailMessageHiddenAreaIconWrapperLeft}
        >
          <Icon
            name='trash-outline'
            size={20}
          />
        </GmailMessageHiddenAreaIconWrapper>

        <GmailMessageHiddenAreaIconWrapper
          style={styleGmailMessageHiddenAreaIconWrapperRight}
        >
          <Icon
            name='trash-outline'
            size={20}
          />
        </GmailMessageHiddenAreaIconWrapper>
      </GmailMessageHiddenArea>
      <PanGestureHandler onGestureEvent={onGestureEvent} simultaneousHandlers={simultaneousHandlers}>
        <GmailMessageContent
          style={[styleGmailMessageContent]}
        >
          <GmailMessageAvatar>
            <GmailMessageAvatarText>{getTextFirstAndLastInitial(message.author)}</GmailMessageAvatarText>
          </GmailMessageAvatar>

          <VBox expanded >
            <HBox justifyContent='space-between'>
              <GmailMessageSender>{message.author}</GmailMessageSender>
              <GmailMessageDate>{formatDate(message.date)}</GmailMessageDate>
            </HBox>
            <GmailMessageSubject>{message.subject}</GmailMessageSubject>
            <GmailMessageDescription>{message.text}</GmailMessageDescription>
          </VBox>
        </GmailMessageContent>
      </PanGestureHandler>
    </GmailMessageContainer>
  )
}