import React, { Component } from 'react';

import PostsIndex from '../containers/PostsIndex';

export default class BlogProject extends Component {
  render() {
    return (
      <div>
        <h3>BLOG PROJECT</h3>
          <PostsIndex />
      </div>
    );
  }
}
