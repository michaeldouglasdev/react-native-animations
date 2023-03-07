import React from 'react';
import { MovieGenresContainer, MovieGenresItem, MovieGenresItemWrapper } from './movie-genres.style';

interface MovieGenresProps {
  genres: string[];
}

export const MoviesGenres: React.FC<MovieGenresProps> = ({ genres }) => {
  return (
    <MovieGenresContainer>
      {genres.map(genre => (
        <MovieGenresItemWrapper key={genre}>
          <MovieGenresItem>{genre}</MovieGenresItem>
        </MovieGenresItemWrapper>
      ))}

    </MovieGenresContainer>
  )
}