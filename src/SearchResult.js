import React from 'react';
import SearchResultMovie from './SearchResultMovie';
import { Row, Col } from 'react-bootstrap';

const SearchResult = (props) => {
    // {JSON.stringify(props.searchResult)

    return (

      <div className="search_result_box">
        <Row>
            <h2 className="left_align">Search Results</h2>
            <SearchResultMovie movie={props.resultOfSearch} />
        </Row>

        <Row>
          <Col xs={6}>
            <button className="btn btn-primary" onClick={() => props.onAddMovie(props.resultOfSearch.imdbID)}>+ Add to My List</button>
          </Col>

          <Col xs={6}>
            <form onSubmit={ event => props.onDismiss(event)}>
              <input
                className="btn btn-primary"
                type="submit"
                value="x Dismiss"
              />
            </form>
          </Col>

        </Row>
      </div>
    );
}

export default SearchResult;
