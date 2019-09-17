import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link to="/index">
            GoFooddy
            </Link>
          </div>
          <div className="navigation">
            <ul className="nav">
              <li>Home |</li>
              <li>About |</li>
              <li>Recipes </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="content-header">Recipes</div>
          <ul className="recipes">
            <li>Vegan</li>
            <li>Vegetarian</li>
            <li>Non Vegeterian</li>
          </ul>
        </div>
        <div className="footer">
            <p>&copy; 2019</p>
        </div>
        
      </div>
      </Router>
    );
  }
}

export default App;
