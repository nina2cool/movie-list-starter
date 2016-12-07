import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MovieProfile from './MovieProfile';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { BrowserRouter, Match, Miss } from 'react-router';

const Router = () => {
  return (
    <BrowserRouter>
      <div className="router">
        <Match exactly pattern="/" component={App} />
        <Match pattern="/profile/:id" component={MovieProfile} />
        <Miss render={() => <h2>Not Found!</h2>}/>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
