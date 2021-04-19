import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      excerpt: ""
    }
  }

  handleTitle = event => this.setState({ title: event.target.value })
  handleExcerpt = event => this.setState({ excerpt: event.target.value })
  
  handleNewPost = event => {
    event.preventDefault()
    this.props.addPost(this.state.title, this.state.excerpt)
  }
  
  render() {
    return (
      <form>
        Título: <input type="text" onChange={this.handleTitle} />
        <br />
        Extracto: <textarea onChange={this.handleExcerpt}></textarea>

        <button onClick={this.handleNewPost}>More</button>
      </form>
    )
  }
}

export default Form;