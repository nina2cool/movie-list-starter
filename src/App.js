import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import axios from 'axios';
// import renderIf from 'render-if';
import MovieList from './MovieList';
import { Grid } from 'react-bootstrap';


class App extends Component {

  constructor() {
    super();

    this.state = {
      searchText: '',
      resultOfSearch: null,
      movieList: []
    };
  }


    componentDidMount() {
      console.log('did mount');

      const savedMovieList = JSON.parse(localStorage.getItem('SavedMovieList'));

      if (savedMovieList) {
           this.setState({
             ...this.state,
             movieList: savedMovieList
           });
         }


    }

  handleChange(event) {
    console.log('handle change');
    const searchText = event.target.value;
    this.setState({
      searchText: searchText
    })
  }

  handleSearch(event) {
    console.log('handle search');
    event.preventDefault();

    axios.get(`http://www.omdbapi.com/?t=${this.state.searchText}&plot=short&r=json`)

    .then(resp => {
      console.log(resp.data);

      this.setState({
        resultOfSearch: resp.data
      })

    })

    .catch(err => console.log(`Error! ${err}`));
  }

  handleDismiss(event) {

    console.log("Dismiss this movie");
    event.preventDefault();

    this.setState({
      searchText: '',
      resultOfSearch: ''
    })

  }

  handleAddMovie(id) {
    event.preventDefault();
    console.log('add', id);

    axios.get(`http://www.omdbapi.com/?t=${this.state.searchText}&plot=short&r=json`)

    .then(resp => {
      console.log(resp.data);

        this.setState(prev => {
                return {
                  ...prev,
                  movieList: [...prev.movieList, resp.data]
                };
              });
              localStorage.setItem('SavedMovieList', JSON.stringify(this.state.movieList));
            })



            .catch(err => console.log(`Error! ${err}`));

  }


  handleDelete(id) {
    event.preventDefault();
    console.log('delete', id);

    var savedMovieList = JSON.parse(localStorage.SavedMovieList);

    var newSavedMovieList = savedMovieList.filter(movie => {
      console.log(movie.imdbID);
      return movie.imdbID !== id;
    });

    console.log(newSavedMovieList);

      this.setState({
        ...this.state,
        movieList: newSavedMovieList
      });

      console.log(this.state.movieList);
      localStorage.setItem('SavedMovieList', JSON.stringify(this.state.movieList));

  }



  render() {
    // console.log('render');
    return (
      <div>
        <Grid>
            <h1>My Own Personal Movie List</h1>
              <h2>Search for a movie by Title:</h2>
              <div>
                  <SearchBar
                  value={this.state.searchText}
                  onChange={this.handleChange.bind(this)}
                  onSearch={this.handleSearch.bind(this)}
                  />
              </div>

              {this.state.resultOfSearch && <SearchResult resultOfSearch={this.state.resultOfSearch} onAddMovie={this.handleAddMovie.bind(this)}
              onDismiss={this.handleDismiss.bind(this)}
              />}

              <hr></hr>
                <h2>My Movie List</h2>
                <MovieList
                  listOfMovies={this.state.movieList}
                  onDelete={this.handleDelete.bind(this)}
                />
        </Grid>
      </div>
    );
  }


}

export default App;
