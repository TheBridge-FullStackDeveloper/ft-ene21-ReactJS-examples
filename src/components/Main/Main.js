import React from 'react';
import './Main.css';
//import spinner from './spinner.gif';

import Post from '../Post/Post';
import Form from '../Form/Form';
import getPosts from '../../data/dataProvider';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      user: this.props.user || "",
      limit: 10
    }

    // ES5 Version
    // this.addPost = this.addPost.bind(this);
  }

  async componentDidMount() {
    const newPosts = await getPosts()

    this.setState({ posts: [...this.state.posts, ...newPosts] });
  }

  componentDidUpdate() {
    //...
  }

  drawPosts = () => {
    if (this.state.posts.length > 0) {
      return this.state.posts.map(item =>
        <Post title={item.title} excerpt={item.excerpt} />
      )
    }
    return <h4>No hay datos</h4>
    // else {
    //   return <img src={spinner} alt=""/>
    // }
  }
  
  //addPost() { // ES5 Version
  addPost = (title, excerpt) => { // ES6 Version
    this.setState({
      posts: [...this.state.posts, { title, excerpt }]
    });
  }
  
  render() {
    return (
      <main>
        <h1>Hola, {this.state.user ? this.state.user : "Anónimo"}</h1>
        {/*<h1>Hola, {this.state.user || "Anónimo"}</h1>*/}
        <Form addPost={this.addPost} />
        {this.drawPosts()}
      </main>
    )
  }
}

export default Main;