import React, { useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { MovieModel } from '../../models/movie.model';
import { getFakeMovies } from '../../utils/get-fake-movies.util';
import { MovieItem } from './components/movie-item/movie-item';
import { MOVIE_ITEM_SIZE, MOVIE_ITEM_SPACER_SIZE } from './components/movie-item/movie-item.styles';
import { MoviesPageContainer } from './movies.styles';
import MaskedView from '@react-native-community/masked-view';
import { MovieBackdrop } from './components/movie-backdrop/movie-backdrop';


export const MoviesPage: React.FC = () => {

  const [movies, setMovies] = useState<MovieModel[]>([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getFakeMovies();
      setMovies([{ id: 'left-spacer' } as MovieModel, ...movies, { id: 'right-spacer' } as MovieModel]);
    }

    fetchData();
  }, []);

  return (
    <MoviesPageContainer>
      <MovieBackdrop movies={movies} scrollX={scrollX} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={({ id }) => id}
        horizontal
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={MOVIE_ITEM_SIZE}
        scrollEventThrottle={16}
        bounces={false}
        decelerationRate={0}
        renderItem={({ item, index }) => {

          if (!item.poster) {
            return <View style={{ width: MOVIE_ITEM_SPACER_SIZE }} />
          }
          const inputRange = [
            (index - 2) * MOVIE_ITEM_SIZE,
            (index - 1) * MOVIE_ITEM_SIZE,
            (index) * MOVIE_ITEM_SIZE
          ]

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0]
          });

          return (
            <MovieItem movie={item} key={item.id} translateY={translateY} />
          )
        }}
      />
    </MoviesPageContainer>
  )
}