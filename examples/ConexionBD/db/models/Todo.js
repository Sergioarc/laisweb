var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('Todo', TodoSchema);
