import axios from 'axios';

import {
  BOOK_SELECTED,
  FETCH_WEATHER,
  FETCH_POSTS,
  WEATHER_ROOT_URL,
  BLOG_ROOT_URL,
} from './constants';

export function selectBook(book) {
  // selectBook is an Action Creator, it needs to return an action which is an object with a type property
  // an action always includes a type and sometimes a payload
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}

export function fetchWeather(city) {
  const url = `${WEATHER_ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // redux-promise will resolve this promise

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function fetchPosts() {
  const url = `${BLOG_ROOT_URL}/posts/${process.env.REACT_APP_BLOG_API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
