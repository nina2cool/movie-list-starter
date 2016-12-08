import React from 'react';
import RemoveMovie from './RemoveMovie';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

const Movie = (props) => {
  return (

      <Col md={3} sm={6} className="movie_box">
        <div className="movie_info">
            <Link to={`/profile/${props.movie.imdbID}`}>
              <div>
                <img src={props.movie && props.movie.Poster} alt="Movie Poster"/>
              </div>
            </Link>
            <div>
              <h3>{props.movie && props.movie.Title}</h3>
              <h5>({props.movie.Year})</h5>
              <p>{props.movie && props.movie.Plot}</p>
            </div>
        </div>
        <div className="movie_buttons">
          { props.RemoveMovieTrue && <Link to={`/profile/${props.movie.imdbID}`}><button className="btn btn-primary">> View Movie Details</button></Link>}
          { props.RemoveMovieTrue && <RemoveMovie movie={props.movie} onDelete={props.onDelete} key={props.movie.imdbID}/> }
        </div>
        </Col>

  );
}
export default Movie;
