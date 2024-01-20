import React, { useState, useRef } from 'react';
import Demo from './subcomponents/Demo';
import ScreenWrapper from './ScreenWrapper';
import ProgressIndicator from './subcomponents/ProgressIndicator';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, Slider, Button, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';

function SelectTimestamps() {
  const navigate = useNavigate();
  const location = useLocation();
  const { videoName, videoFile } = location.state || {};
  const [selectedTimestamp, setSelectedTimestamp] = useState(0);
  const videoRef = useRef(null);

  const handleContinue = () => {
    navigate('/createform');
  };

  // State for the popup form
  const [isFormOpen, setFormOpen] = useState(false);

  const handleSliderChange = (event, newValue) => {
    setSelectedTimestamp(newValue);
    // Set video player's current time based on the slider value
    if (videoRef.current) {
      videoRef.current.currentTime = (newValue / 100) * videoRef.current.duration;
    }
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
      <Typography variant="h3">Select Timestamp Screen</Typography>

      {videoFile && (
        <div style={{ width: '70%', height: '40%', margin: 'auto' }}>
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            controls
            onTimeUpdate={() => {
              // Update the slider value as the video plays
              if (videoRef.current) {
                const currentTime = (videoRef.current.currentTime / videoRef.current.duration) * 100;
                setSelectedTimestamp(currentTime);
              }
            }}
          >
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
