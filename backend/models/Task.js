const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  completed: { type: Boolean, default: false }
});

module.exports = Task = mongoose.model('tasks', TaskSchema);
