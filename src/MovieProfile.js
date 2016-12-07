import React, { Component } from 'react';
import axios from 'axios';
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
        console.log(resp.data);
      })
      .catch(err => console.log(`Error! ${err}`));
  }

  renderMovieProfile() {
    return (
      <div>
          <Grid>
              <Row>
                  <Col md={12}>
                      <div className="profile">
                        <div className="image-cropper">
                          <img src={this.state.movie.Poster} alt="avatar"/>
                        </div>
                        <div className="contact-info">
                          <h2>Title: {this.state.movie.Year}</h2>
                          <span>Plot: {this.state.movie.Plot}</span>
                        </div>
                      </div>
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
