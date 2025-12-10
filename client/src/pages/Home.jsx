import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await API.get('/');
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="card">
          <h2>{post.title}</h2>
          <p className="post-meta">By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</p>
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/posts/${post._id}`} className="btn">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
