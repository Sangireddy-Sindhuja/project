const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  date: Date
});

module.exports = mongoose.model('Program', programSchema);