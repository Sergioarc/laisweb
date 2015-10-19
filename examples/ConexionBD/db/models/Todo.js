var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  nombre: {type: String, index:{unique:true}},
  pass: {type: String}
});

module.exports = mongoose.model('usuarios', TodoSchema);
