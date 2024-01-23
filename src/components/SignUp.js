import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const SignUp = ({ handleSignUp }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Implement signup logic and API call to the server
    handleSignUp(formData);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Sign Up
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
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
