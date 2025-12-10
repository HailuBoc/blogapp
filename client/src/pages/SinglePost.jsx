import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import API from '../api';

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await API.get(`/${id}`);
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await API.delete(`/${id}`);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) return <div className="container">Blog App Loading...</div>;

  return (
    <div className="container">
      <div className="card">
        <h1>{post.title}</h1>
        <p className="post-meta">By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</p>
        <p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p>
        <div style={{ marginTop: '20px' }}>
            <Link to={`/edit/${post._id}`} className="btn">Edit</Link>
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
            <Link to="/" className="btn" style={{backgroundColor: '#ccc', color: '#000'}}>Back</Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
