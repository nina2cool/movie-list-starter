import React from 'react';

const MovieProfile = (props) => {
  return (
    <div>

        <div>
          <img src={props.movie && props.movie.Poster} alt="avatar"/>
        </div>

        <div>
          <h3>{props.movie && props.movie.Title} ({props.movie.Year})</h3>
          <p>{props.movie && props.movie.Plot}</p>
        </div>

        <div>
          Add to My List {props.movie.imdbID}
        </div>

      </div>
  );
}


export default MovieProfile;
