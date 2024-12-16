const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll: { type: String, required: true, unique: true },
  age: { type: Number, required: true},
  Gender: { type: String, required: true },
  Address: { type: String, required: true }
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User; // Export the User model