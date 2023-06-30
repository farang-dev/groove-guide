import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/events');
        console.log('Response:', response.data);
        if (Array.isArray(response.data.data)) {
          setPosts(response.data.data);
        } else {
          setError(new Error('Invalid response data'));
        }
      } catch (error) {
        console.error('Error:', error);
        setError(error);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <Post title={post.attributes.Title} content={post.attributes.Content} />
      ))}
    </div>
  );
};

export default App;
