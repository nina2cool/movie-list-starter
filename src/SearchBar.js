import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form onSubmit={ event => props.onSearch(event)}>
        <input
          className='search-bar'
          type="text"
          placeholder="Enter movie name"
          value={props.value}
          onChange={ event => props.onChange(event) }
        />
        <input
          type="submit"
          value="Search the IMDB database"
          disabled={!props.value.trim()}
        />
      </form>
    </div>

  );
}

SearchBar.propTypes = {
  value: React.PropTypes.string.isRequired
  // onChange: React.PropTypes.func.isRequired
}

export default SearchBar;
