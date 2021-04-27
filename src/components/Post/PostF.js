import React from 'react';
import './Post.css';

import { useEffect, useContext } from 'react';

import LoginContext from '../../contexts/LoginContext'
import ThemeContext from '../../contexts/ThemeContext'

const PostF = (props) => {
  const login = useContext(LoginContext)
  const theme = useContext(ThemeContext)

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

      { login.logged ?
        <button onClick={login.logout}>Cerrar sesión</button>
        :
        <button onClick={login.login}>Iniciar sesión</button>
      }
    </article>
  )
}

export default PostF;