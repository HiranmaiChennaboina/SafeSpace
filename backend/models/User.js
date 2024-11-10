const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  role: { type: String, required: true } 
});

// Create the User model
module.exports = mongoose.model('User', userSchema);

