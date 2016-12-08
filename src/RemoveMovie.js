import React from 'react';

const RemoveMovie = (props) => {
  return (
    <div>
    <form onSubmit={ event => props.onDelete(event, props.movie.imdbID)}>
        <input
          className="btn btn-primary"
          type="submit"
          value="x Remove from My Movie List"
        />
    </form>
    </div>

  );
}

export default RemoveMovie;
