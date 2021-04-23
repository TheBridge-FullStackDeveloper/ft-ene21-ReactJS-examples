import { useState, useEffect } from 'react'
import getPosts from '../data/dataProvider';

const useFetch = (endpoint) => {
  const [state, setState] = useState([])
  
  useEffect(() => {
    const loadPosts = async () => {
      const newPosts = await getPosts(endpoint)

      setState([...state, ...newPosts]);
    }

    loadPosts();
  }, [state])

  return { state }
}

export default useFetch;