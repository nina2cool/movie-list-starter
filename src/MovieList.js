import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  return (
    <div>
        <ul>
          {props.listOfMovies.map(movie => {
              return (
                <Movie
                  key={movie.imdbID}
                  movie={movie}
                  onDelete={props.onDelete}
                />
              )
            })}
        </ul>
    </div>
  );
}


export default MovieList;
