const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

// Replace 'your_database_connection_string' with your MongoDB connection string
mongoose.connect('mongodb+srv://shaadsufi:passwordpassword@cluster0.gfzrtnp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(200).json({ message: 'User signed up successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error signing up user.' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).json({ message: 'User logged in successfully!' });
    } else {
      res.status(401).json({ error: 'Invalid credentials.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error logging in user.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
