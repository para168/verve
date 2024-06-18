import React from 'react';
import axios from 'axios';

const TaskList = ({ tasks, removeTask }) => {
  const handleDelete = (taskId) => {
    axios.delete(`/api/tasks/${taskId}`)
      .then(() => removeTask(taskId))
      .catch(err => console.log(err));
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          {task.title} - {new Date(task.dueDate).toLocaleDateString()}
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
