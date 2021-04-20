import React from 'react';
import './Post.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("Me mueroooooooo... y soy el " + this.props.data.id)
  }

  immolateMe = () => this.props.data.deletePost(this.props.data.id)
  
  render() {
    return (
      <article>
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.excerpt}</p>
        <button onClick={this.immolateMe}>Borrar</button>
      </article>
    )
  }
}

export default Post;