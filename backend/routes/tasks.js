const express = require('express');
const router = express.Router();
const passport = require('passport');
const Task = require('../models/Task');

// Create task
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const newTask = new Task({
    userId: req.user.id,
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate
  });

  newTask.save().then(task => res.json(task));
});

// Get tasks
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Task.find({ userId: req.user.id }).then(tasks => res.json(tasks));
});

// Delete task
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Task.findById(req.params.id).then(task => {
    if (task.userId.toString() !== req.user.id) {
      return res.status(401).json({ notauthorized: 'User not authorized' });
    }
    task.remove().then(() => res.json({ success: true }));
  });
});

module.exports = router;
