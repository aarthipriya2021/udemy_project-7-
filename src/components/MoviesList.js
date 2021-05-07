import React from 'react';
import { Movie} from './Movie';
import classes from  './Movie.module.css';

export const MoviesList = (props) => {
  return (
    
      <ul className={classes['movies-list']}>
        {props.movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
        ))}

      </ul>
   
  )
}

export default MoviesList
