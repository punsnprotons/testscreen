import React, { useState } from 'react';
import Demo from './subcomponents/Demo';
import ScreenWrapper from './ScreenWrapper';
import ProgressIndicator from './subcomponents/ProgressIndicator';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, Slider, Button, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';

function SelectTimestamps() {
  const navigate = useNavigate();
  const location = useLocation();
  const { videoName, videoFile } = location.state || {};

  const handleContinue = () => {
    navigate('/createform');
  };

  // State for the slider value
  const [selectedTimestamp, setSelectedTimestamp] = useState(0);

  // State for the popup form
  const [isFormOpen, setFormOpen] = useState(false);

  const handleSliderChange = (event, newValue) => {
    setSelectedTimestamp(newValue);
  };

  const handleOpenForm = () => {
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  const handleContinueWithForm = () => {
    // Add logic to handle the form submission
    // You can use selectedTimestamp in your submission logic

    // Close the form after submission
    handleCloseForm();
    handleContinue();
  };

  return (
    <ScreenWrapper handleClick={handleContinue}>
    <Demo />
    <ProgressIndicator />

    {videoFile && (
      <div style={{ width: '70%', height: '40%', margin: 'auto' }}>
        <video width="100%" height="100%" controls>
          <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )}

    {/* Center-aligned Slider for selecting timestamp */}
    <div style={{ width: '70%', margin: 'auto', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <Slider
        value={selectedTimestamp}
        min={0}
        max={100}
        onChange={handleSliderChange}
        style={{ width: '80%' }}
      />
    </div>

    {/* Center-aligned Button to open the popup form */}
    <div style={{ width: '70%', margin: 'auto', textAlign: 'center', marginTop: '20px' }}>
      <Button variant="contained" onClick={handleOpenForm}>
        Open Form
      </Button>
    </div>

      {/* Popup form */}
      <Dialog open={isFormOpen} onClose={handleCloseForm}>
        <DialogTitle>Timestamp Form</DialogTitle>
        <DialogContent>
          {/* Add form fields as needed */}
          <TextField label="Name" fullWidth />
          <TextField label="Email" fullWidth />
          {/* Add more form fields as needed */}
          <Button variant="contained" onClick={handleContinueWithForm} style={{ marginTop: '20px' }}>
            Continue
          </Button>
        </DialogContent>
      </Dialog>
    </ScreenWrapper>
  );
}

export default SelectTimestamps;
