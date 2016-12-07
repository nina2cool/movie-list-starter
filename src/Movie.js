import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

const Movie = (props) => {
  return (
    <div>
      <Col md={3}>
        <Link to={`/profile/${props.movie.imdbID}`}>
        <div>
          <img src={props.movie && props.movie.Poster} alt="avatar"/>
        </div>
        </Link>
        <div>
          <h3>{props.movie && props.movie.Title} ({props.movie.Year})</h3>
          <p>{props.movie && props.movie.Plot}</p>
        </div>
        <div>
            <form onSubmit={ event => props.onDelete(event, props.movie.imdbID)}>
                <input
                  type="submit"
                  value="x Remove from My Movie List"
                />
            </form>
        </div>
        </Col>
      </div>
  );
}

export default Movie;
