import {
  NavigationHelpers,
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {Dimensions, Pressable} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {SnapchatStoryModel} from '../../../models/snaptchat-story.model';
import {
  StoryThumbnailImage,
  StoryThumbnailImageWrapper,
} from './story-thumbnail.styles';

const margin = 16;
const borderRadius = 5;
const width = Dimensions.get('window').width / 2 - margin * 2;

interface StoryThumbnailProps {
  story: SnapchatStoryModel;
}

export const StoryThumbnail: React.FC<StoryThumbnailProps> = ({story}) => {
  const navigation = useNavigation();
  const [opacity, setOpacity] = useState(1);

  useFocusEffect(() => {
    if (navigation.isFocused()) {
      setOpacity(1);
    }
  });

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('SnapchatDetailPage', {
          story,
        });
        setOpacity(0);
      }}>
      <StoryThumbnailImageWrapper style={{opacity}}>
        <SharedElement id={story.id} style={{flex: 1}}>
          <StoryThumbnailImage
            source={story.thumb}
            style={{alignSelf: 'flex-start'}}
          />
        </SharedElement>
      </StoryThumbnailImageWrapper>
    </Pressable>
  );
};
