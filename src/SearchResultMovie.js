import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

const SearchResultMovie = (props) => {
  return (
    <div>
    <Row>
      <Col sm={4} className="search_movie_poster_box">
        <Link to={`/profile/${props.movie.imdbID}`}>
          <div>
            <img src={props.movie && props.movie.Poster} alt="Movie Poster" />
          </div>
        </Link>
      </Col>
      <Col sm={8} className="search_movie_info_box">
      <div>
        <h3>{props.movie && props.movie.Title}</h3>
        <h5>({props.movie.Year})</h5>
        <p>{props.movie && props.movie.Plot}</p>
      </div>
      </Col>
    </Row>
    </div>
  );
}

export default SearchResultMovie;
