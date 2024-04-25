import React, {useEffect, useState} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent, ViewToken} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {InstagramUserModel} from '../../models/instagram-user.model';
import {RenderItem} from '../../types/render-item';
import {Dimensions} from '../../utils/dimensions';
import {getFakeInstagramUser} from '../../utils/get-fake-instagram-user';
import {UserStory} from './components/user-story';
import {StoryContainer} from './story.styles';

export const StoryPage: React.FC = () => {
  const [instagramUser, setInstagramUser] = useState<InstagramUserModel[]>([]);

  const scrollX = useSharedValue(0);
  const viewableItems = useSharedValue<ViewToken[]>([]);

  useEffect(() => {
    setInstagramUser(getFakeInstagramUser());
  }, []);

  const renderItem = ({item, index}: RenderItem<InstagramUserModel>) => {
    return (
      <UserStory
        user={item}
        viewableItems={viewableItems}
        index={index}
        scrollX={scrollX}
      />
    );
  };

  /*  const styles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(scrollX.value, [0, width], [0, 90])}deg`,
        },
      ],
    };
  });*/

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
  };

  return (
    <StoryContainer>
      <FlatList<InstagramUserModel>
        data={instagramUser}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        onScroll={onScroll}
        pagingEnabled
      />
    </StoryContainer>
  );
};
