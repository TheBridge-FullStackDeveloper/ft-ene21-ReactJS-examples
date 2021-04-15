import React from 'react';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          title: "Ella Baila Sola regresa con diez nuevas discusiones",
          excerpt: "lorem ipsum 1"
        },
        {
          title: "Los fans de Bowie siguen esperando que el artista abandone ya esa etapa suya consistente en estar muerto",
          excerpt: "lorem ipsum 2"
        }
      ]
    }

    // ES5 Version
    // this.addPost = this.addPost.bind(this);
  }

  drawPosts = () => {
      const posts = this.state.posts.map(item =>
        <article>
          <h2>{item.title}</h2>
          <p>{item.excerpt}</p>
        </article>
    )

    return posts
  }
  
  //addPost() { // ES5 Version
  addPost = () => { // ES6 Version
    this.setState({
      posts: [...this.state.posts, {
        title: "otro",
        excerpt: "lorem ipsum " + (this.state.posts.length+1)
      }]
    });
  }
  
  render() {
    return (
      <main>
        {this.drawPosts()}
        <button onClick={this.addPost}>More</button>
      </main>
    )
  }
}

export default Main;