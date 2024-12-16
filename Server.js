const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userController = require('./control/control'); // Import the user controller

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialize Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// CRUD routes
app.get('/api/Getusers', userController.getAllUsers); // Use controller for getting users
app.post('/api/Postusers', userController.createUser); // Use controller for creating users
app.delete('/api/users/:id', userController.deleteUser); // Use controller for deleting users

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});