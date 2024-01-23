import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'; // Import axios library


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();


  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = () => {
    const user = {
      user: formData.username,
      password: formData.password,
    };
  
    axios.post('https://192.168.0.101:8000/login', user)
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((error) => {
        console.error('Signup failed:', error);
        // You may want to show an error message to the user
      });
  };
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
