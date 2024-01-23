import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const Login = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Implement login logic and API call to the server
    handleLogin(formData);
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
