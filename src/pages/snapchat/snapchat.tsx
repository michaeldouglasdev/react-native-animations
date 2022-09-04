import React from 'react';
import { ScrollView, View } from 'react-native';
import { getFakeStories } from '../../utils/get-fake-stories.util';
import { StoryThumbnail } from './components/story-thumbnail';
import { SnapchatContainer } from './snapchat.styles';

export const SnapchatPage: React.FC = () => {

  const stories = getFakeStories();

  return (
    <ScrollView>
      <SnapchatContainer>
        {stories.map(story => (
          <StoryThumbnail key={story.id} story={story} />
        ))}
      </SnapchatContainer>
    </ScrollView>
  )
}