import React, { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { MessageModel } from '../../models/message.model';
import { getFakeMessages, getFakeMessagesSortByDate } from '../../utils/get-fake-messages.util';
import { GmailMessage } from './components/gmail-message/gmail-message';
import { GmailContainer } from './gmail.styles';

export const GmailPage: React.FC = () => {

  const [messages, setMessages] = useState<MessageModel[]>([]);

  useEffect(() => {
    setMessages(getFakeMessages());
  }, []);

  const handleDeleteMessage = (index: number) => {
    const listMessage = [...messages]
    listMessage.splice(index, 1);

    setMessages(listMessage);
  }

  const scrollRef = useRef(null);

  return (
    <GmailContainer>
      <ScrollView ref={scrollRef}>
        {messages.map((message, index) => (
          <GmailMessage
            index={index}
            key={message.id}
            message={message}
            onDelete={() => handleDeleteMessage(index)}
            simultaneousHandlers={scrollRef}
          />
        ))}
      </ScrollView>
    </GmailContainer>
  )
}