import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from './Posts';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/events?populate=*');
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
        <Link key={post.id} to={`/event/${post.id}`}>
          <Post
            title={post.attributes.Title}
            content={post.attributes.Content}
            venue={post.attributes.Venue}
          />
        </Link>
      ))}
    </div>
  );
};

export default Home;
