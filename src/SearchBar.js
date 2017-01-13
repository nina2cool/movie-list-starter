import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


const SearchBar = (props) => {
  return (
    <div>
      <Grid>
        <Row>
          <Col md={6}>
            <form onSubmit={ event => props.onSearch(event)}>
              <input
                className='search-bar'
                type="text"
                placeholder="Enter movie name"
                value={props.value}
                onChange={ event => props.onChange(event) }
              />
              <input
                className="btn btn-primary search_button"
                type="submit"
                value="Search the database"
                disabled={!props.value.trim()}
              />
            </form>
            </Col>
          </Row>
        </Grid>
    </div>

  );
}

SearchBar.propTypes = {
  value: React.PropTypes.string.isRequired
}

export default SearchBar;
