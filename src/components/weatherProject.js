import React, { Component } from 'react';

import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weatherList';

export default class WeatherProject extends Component {
  render() {
    return (
      <div>
        <h3>WEATHER PROJECT</h3>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
