import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await API.get(`/${id}`);
        setFormData({ title: data.title, content: data.content, author: data.author });
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/${id}`, formData);
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit} className="card">
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea name="content" rows="10" value={formData.content} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
