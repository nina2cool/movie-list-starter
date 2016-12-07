import React from 'react';
import Movie from './Movie';
import { Grid, Row, Col } from 'react-bootstrap';

const MovieList = (props) => {
  return (
    <div>
        <Grid>
          <Row>
              {props.listOfMovies.map(movie => {
                  return (
                    <Movie
                      key={movie.imdbID}
                      movie={movie}
                      onDelete={props.onDelete}
                    />
                  )
                })}
            </Row>
        </Grid>
    </div>
  );
}


export default MovieList;
