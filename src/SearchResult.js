import React from 'react';
import Movie from './Movie';
import { Row } from 'react-bootstrap';

const SearchResult = (props) => {
    // {JSON.stringify(props.searchResult)

    return (

      <div>
      <Row>
          <hr></hr>
            <h2>Search Results</h2>
            <Movie movie={props.resultOfSearch} />
              <button onClick={() => props.onAddMovie(props.resultOfSearch.imdbID)}>Add to My List</button>
              <form onSubmit={ event => props.onDismiss(event)}>
              <input
                type="submit"
                value="Dismiss"
              />
              </form>
        </Row>
      </div>
    );
}

export default SearchResult;
