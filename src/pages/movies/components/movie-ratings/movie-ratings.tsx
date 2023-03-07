import React from 'react';
import { MovieRatingsContainer, MovieRatingsText } from './movie-ratings.styles';
import Icon from 'react-native-vector-icons/AntDesign';

interface MovieRatingsProps {
  ratings: number;

}
export const MovieRatings: React.FC<MovieRatingsProps> = ({ ratings }) => {

  const filledStars = Math.floor(ratings / 2);
  const maxStars = Array(5 - filledStars).fill('staro');
  const list = [...Array(filledStars).fill('star'), ...maxStars];

  return (
    <MovieRatingsContainer>
      <MovieRatingsText></MovieRatingsText>
      {list.map((item, index) => (
        <Icon key={index} name={item} size={12} color='tomato' />
      ))}
    </MovieRatingsContainer>
  )
}