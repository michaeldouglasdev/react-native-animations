import MaskedView from '@react-native-community/masked-view';
import React from 'react';
import { Animated, FlatList } from 'react-native';
import { MovieModel } from '../../../../models/movie.model';
import { MovieBackdropContainer, MovieBackdropMaskedView, MovieBackdropMaskedViewImage } from './movie-backdrop.styles';

interface MovieBackdropProps {
  movies: MovieModel[];
  scrollX: Animated.Value;
}

export const MovieBackdrop: React.FC<MovieBackdropProps> = ({
  movies,
  scrollX
}) => {
  return (
    <MovieBackdropContainer>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return (
            <MovieBackdropMaskedView>
              <MovieBackdropMaskedViewImage source={{ uri: item.poster }} />
            </MovieBackdropMaskedView>
          )
        }}
      />
    </MovieBackdropContainer>
  )
}