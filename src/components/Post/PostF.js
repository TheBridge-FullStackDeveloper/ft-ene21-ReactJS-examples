import React from 'react';
import './Post.css';

import { useEffect } from 'react';

const PostF = (props) => {

  // As componentWillUnmount()
  useEffect(() => {
    return () => console.log("Me mueroooooooo... y soy el " + props.data.id)
  }, []);

  const immolateMe = () => props.data.deletePost(props.data.id)
  
  return (
    <article>
      <h2>{props.data.title}</h2>
      <p>{props.data.excerpt}</p>
      <button onClick={immolateMe}>Borrar</button>
    </article>
  )
}

export default PostF;