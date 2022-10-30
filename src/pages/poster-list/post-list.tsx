import React, { useCallback, useEffect, useRef } from 'react';
import { View, Dimensions, FlatList, Image, Animated } from 'react-native';
import { FlingGestureHandler, Directions, State } from 'react-native-gesture-handler';
import { getFakePosters } from '../../utils/get-fake-posters.util';
import { PostItemTitle, PostListContainer, PostItemContainer, PostItemContent, PostItemContentDate, PostItemContentLocation, PostListWrapper } from './post-list.styles';

const { width } = Dimensions.get('screen')
const SPACING = 10;
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;
const OVERFLOW_HEIGHT = 70;

export const PostListPage: React.FC = () => {
  const posters = getFakePosters();
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);

  const inputRangeTitle = [-1, 0, 1];
  const translateYTitle = scrollXAnimated.interpolate({
    inputRange: inputRangeTitle,
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT]
  });

  const setActiveIndex = useCallback((activeIndex) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  }, []);

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start()
  }, []);

  return (
    <>
      <FlingGestureHandler
        key="left"
        direction={Directions.LEFT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === posters.length - 1) {
              return;
            }
            setActiveIndex(index + 1);
          }
        }}
      >
        <FlingGestureHandler
          key="right"
          direction={Directions.RIGHT}
          onHandlerStateChange={(ev) => {
            if (ev.nativeEvent.state === State.END) {
              if (index === 0) {
                return;
              }
              setActiveIndex(index - 1);
            }
          }}
        >
          <PostListWrapper>
            <PostListContainer>
              <Animated.View style={{
                transform: [
                  {
                    translateY: translateYTitle
                  }
                ]
              }}>
                {posters.map((item, index) => (
                  <PostItemContainer key={index}>
                    <PostItemTitle>{item.title}</PostItemTitle>
                    <PostItemContent>
                      <PostItemContentLocation>{item.location}</PostItemContentLocation>
                      <PostItemContentDate>{item.date}</PostItemContentDate>
                    </PostItemContent>
                  </PostItemContainer>
                ))}
              </Animated.View>
            </PostListContainer>

            <FlatList
              data={posters}
              keyExtractor={(_, index) => String(index)}
              horizontal
              inverted
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
                padding: SPACING * 2
              }}
              scrollEnabled={false}
              removeClippedSubviews={false}
              CellRendererComponent={({ item, index, children, style, ...props }) => {
                const newStyle = [
                  style,
                  { zIndex: posters.length - index }
                ]

                return (
                  <View style={newStyle} index={index} {...props}>
                    {children}
                  </View>
                )
              }}
              renderItem={({ item, index }) => {
                const inputRange = [index - 1, index, index + 1];
                const translateX = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [50, 0, -100]
                });
                const scale = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [.8, 1, 1.3]
                });

                const opacity = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0]
                })
                return (
                  <Animated.View style={{
                    position: 'absolute', left: -ITEM_WIDTH / 2,
                    transform: [
                      {
                        translateX
                      },
                      {
                        scale
                      }
                    ],
                    opacity
                  }}
                  >
                    <Image source={{
                      uri: item.poster,
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT
                    }} />
                  </Animated.View>
                )
              }}
            />
          </PostListWrapper>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </>
  )
}