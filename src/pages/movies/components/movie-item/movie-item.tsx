import React from 'react';
import { Animated } from 'react-native';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { MovieModel } from '../../../../models/movie.model';
import { MoviesGenres } from '../movie-genres/movie-genres';
import { MovieRatings } from '../movie-ratings/movie-ratings';
import { MovieItemContainer, MovieItemContent, MovieItemContentDescription, MovieItemContentImage, MovieItemContentTitle, MOVIE_ITEM_SIZE } from './movie-item.styles';

interface MovieItemProps {
  movie: MovieModel;
  translateY: any
}
export const MovieItem: React.FC<MovieItemProps> = ({
  movie: {
    title,
    description,
    poster,
    genres,
    rating
  },
  translateY
}) => {

  console.log(translateY);
  return (
    <MovieItemContainer >
      <MovieItemContent
        style={{
          transform: [
            {
              translateY
            }
          ]
        }}
      >
        <MovieItemContentImage
          source={{ uri: poster }}
        />
        <MovieItemContentTitle>
          {title}
        </MovieItemContentTitle>
        <MovieRatings ratings={rating} />
        <MoviesGenres genres={genres} />
        <MovieItemContentDescription>
          {description}
        </MovieItemContentDescription>
      </MovieItemContent>
    </MovieItemContainer>
  )
}