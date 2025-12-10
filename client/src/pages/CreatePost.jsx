import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const CreatePost = () => {
  const [formData, setFormData] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/', formData);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Create New Post</h1>
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
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
