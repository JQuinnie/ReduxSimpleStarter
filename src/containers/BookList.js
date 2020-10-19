import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// state contains the array of books and active book
// this function is the glue between React and Redux
// take some state and map it to the props of our container (make available)
function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// anything returned from this function will end up as props on the BookList container
// take an action creator and make it available to be called inside of container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of the reducers via dispatch
  // dispatch takes all the actions like a funnel and passes them out to all the different reducers in app
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect takes a function and a component and returns a container
// promotes BookList from a component to container - it needs to know about this new dispatch method (selectBook)
// then make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
