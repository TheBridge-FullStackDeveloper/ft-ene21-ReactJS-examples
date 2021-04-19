import React from 'react';
import './Post.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    //...
  }
  
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.excerpt}</p>
      </article>
    )
  }
}

export default Post;