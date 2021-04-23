import { useState, useEffect } from 'react';
//import { useFetch } from '../../hooks/useFetch';
import { getPosts, closeDB } from '../../data/dataProvider';

import './Main.css';
//import spinner from './spinner.gif';

import PostF from '../Post/PostF';
import Form from '../Form/Form';

const MainF = (props) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(props.user || "");
  const [limit, setLimit] = useState(10);

  // As componentDidUpdate()
  useEffect(() => {
    if (getTotalPosts())
      console.log(getTotalPosts())
  }) // Always EXCEPT first

  // As componentDidMount()
  useEffect(() => {

    // AT BEGINNING 
    const loadPosts = async () => {
      const newPosts = await getPosts()

      setPosts([...posts, ...newPosts]);
    }

    console.log("Retrieving data...")
    loadPosts();

    // AT END
    return () => { closeDB() }
  }, []) // ONCE2

  // posts OR user change/s
  useEffect(() => {
    console.log("Hay cambios en los posts o en el user")
  }, [posts, user]);

  const drawPosts = () => {
    if (getTotalPosts() > 0) {
      return posts.map((item, index) => {
        const newPost = {
          id: index,
          title : item.title,
          excerpt: item.excerpt,
          deletePost: deletePost
        }

        return <PostF data={newPost} key={newPost.id} />
      })
    }
    return <h4>No hay datos</h4>
  }
  
  const addPost = (title, excerpt) => { // ES6 Version
    setPosts([...posts, { title, excerpt }]);
  }

  const deletePost = index => {
    setPosts(posts.filter((post, i) => index !== i));
  }
  
  const getTotalPosts = () => posts.length
  
  return (
    <main>
      <h1>Hola, {user ? user : "Anónimo"}</h1>
      {/*<h1>Hola, {user || "Anónimo"}</h1>*/}
      <Form addPost={addPost} />
      <p>{getTotalPosts()}</p>
      {drawPosts()}
    </main>
  )
}

export default MainF;