import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import BooksProject from './booksProject';
import WeatherProject from './weatherProject';
import BlogProject from './blogProject';
import PostsNew from '../containers/PostsNew';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/book" component={BooksProject} />
          <Route path="/weather" component={WeatherProject} />
          <Route path="/blog/posts/new" component={PostsNew} />
          <Route path="/blog" component={BlogProject} />
        </Switch>
      </div>
    );
  }
}

const Content = () => {
  return (
    <div>
      <h3>List of Projects:</h3>
      <ul>
        <li><Link to="/book">Book Project</Link></li>
        <li><Link to="/weather">Weather Project</Link></li>
        <li><Link to="/blog">Blog Project</Link></li>
      </ul>
    </div>
  );
};

export default withRouter(App);
