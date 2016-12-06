import React from 'react';
import Movie from './Movie';

const SearchResult = (props) => {
    // {JSON.stringify(props.searchResult)

    return (

      <div>
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
      </div>
    );
}

export default SearchResult;
