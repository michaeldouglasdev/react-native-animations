import React from 'react';
import {ScrollView, View} from 'react-native';
import {getFakeSnapchatStories} from '../../utils/get-fake-snapchat-stories.util';
import {StoryThumbnail} from './components/story-thumbnail';
import {SnapchatContainer} from './snapchat.styles';

export const SnapchatPage: React.FC = () => {
  const stories = getFakeSnapchatStories();

  return (
    <ScrollView>
      <SnapchatContainer>
        {stories.map(story => (
          <StoryThumbnail key={story.id} story={story} />
        ))}
      </SnapchatContainer>
    </ScrollView>
  );
};
