import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task._id !== taskId));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default Dashboard;
