import Post from './Post';
import { useEffect, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // iifa
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(API_URL);
  //       const posts = await res.json();
  //       setPosts(posts);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setIsLoading(false);
  //   }
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //     })
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  // если ошибка то это не пустая строка и это тру и следовательно выбьет ошибку а не карточки с постами
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => <Post {...post} key={post.id} />)
      )}
    </>
  );
};

export default Posts;
