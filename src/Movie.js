import React from 'react';

const Movie = (props) => {
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
            <form onSubmit={ event => props.onDelete(props.movie.imdbID)}>
                <input
                  type="submit"
                  value="x Remove from My Movie List"
                />
            </form>
        </div>
      </div>
  );
}

// Contact.propTypes = {
//   id: React.PropTypes.string.isRequired,
//   avatar: React.PropTypes.string.isRequired,
//   name: React.PropTypes.string.isRequired,
//   occupation: React.PropTypes.string.isRequired
// }

export default Movie;
