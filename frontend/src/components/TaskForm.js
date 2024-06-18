import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ addTask }) => {
  const [formData, setFormData] = useState({ title: '', description: '', dueDate: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/tasks', formData)
      .then(res => {
        addTask(res.data);
        setFormData({ title: '', description: '', dueDate: '' });
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
      <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
