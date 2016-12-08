import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

class MovieProfile extends Component {
  constructor() {
    super();

    this.state = {
      movie: null
    };
  }

  componentDidMount() {

    axios.get(`http://www.omdbapi.com/?i=${this.props.params.id}&plot=full&r=json`)

      .then(resp => {
        this.setState({
          movie: resp.data
        })
        //console.log(resp.data);
      })
      .catch(err => console.log(`Error! ${err}`));
  }

  renderMovieProfile() {
    return (
      <div className="movie_profile">
          <Grid>
                <div>
                  <h2 className="movie_profile_header">{this.state.movie.Title} ({this.state.movie.Year})</h2>
                </div>
                <Row>
                  <Col md={4}>
                        <div className="image-cropper">
                          <img src={this.state.movie.Poster} alt="Movie Poster"/>
                        </div>
                        <h3>Released: {this.state.movie.Released}</h3>
                        <h3>Genre: {this.state.movie.Genre}</h3>
                  </Col>
                  <Col md={8}>
                        <div className="contact-info">
                          <h3>Actors: {this.state.movie.Actors}</h3>
                          <h3>Plot: {this.state.movie.Plot}</h3>
                          <h3>Awards: {this.state.movie.Awards}</h3>
                        </div>
                        <Link to={`/`}><button className="btn btn-primary"> Back to List</button></Link>
                  </Col>
              </Row>
          </Grid>
      </div>
    );
  }

  render() {
    if (!this.state.movie) {
      return <h2>Loading...</h2>
    }

    return this.renderMovieProfile();
  }
}

export default MovieProfile;
