import React, { Component } from 'react';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

export default class BooksProject extends Component {
  render() {
    return (
      <div>
        <h3>BOOKS PROJECT</h3>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
