import React, { useState, useRef, useEffect } from 'react';
import Demo from './subcomponents/Demo';
import ScreenWrapper from './ScreenWrapper';
import ProgressIndicator from './subcomponents/ProgressIndicator';
import { useNavigate } from 'react-router-dom';
import { Typography, Slider, Button, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Box } from '@mui/material';
import { useAppContext } from '../AppContext';

function ReviewScreen() {
  const navigate = useNavigate();
  const { videoData, formData } = useAppContext();
  const [selectedTimestamp, setSelectedTimestamp] = useState(0);
  const [isFormOpen, setFormOpen] = useState(false);
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    // Reset selected timestamp when videoData changes
    setSelectedTimestamp(0);
  }, [videoData]);

  const handleContinue = () => {
    navigate('/createlink');
  };

  const handleSliderChange = (event, newValue) => {
    setSelectedTimestamp(newValue);
    if (videoRef.current) {
      videoRef.current.currentTime = (newValue / 100) * videoRef.current.duration;
    }
  };

  const handleOpenForm = (index) => {
    setCurrentFormIndex(index);
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  return (
    <ScreenWrapper handleClick={handleContinue}>
      <Demo />
      <ProgressIndicator />
      <Typography variant="h3">Review Screen</Typography>

      {videoData && (
        <div style={{ width: '70%', height: '40%', margin: 'auto', borderRadius: '20px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', marginTop: '15px' }}>
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            controls
            onTimeUpdate={() => {
              if (videoRef.current) {
                const currentTime = (videoRef.current.currentTime / videoRef.current.duration) * 100;
                setSelectedTimestamp(currentTime);
              }
            }}
          >
            <source src={URL.createObjectURL(videoData)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div style={{ width: '70%', margin: 'auto', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <Slider
          value={selectedTimestamp}
          min={0}
          max={100}
          onChange={handleSliderChange}
          style={{ width: '80%' }}
        />
      </div>

      <div style={{ width: '70%', margin: 'auto', textAlign: 'center', marginTop: '20px' }}>
        <Button variant="contained" onClick={() => handleOpenForm(0)}>
          Review
        </Button>
      </div>

      {/* Popup form */}
      <Dialog open={isFormOpen} onClose={handleCloseForm}>
        <DialogTitle>Timestamp Form</DialogTitle>
        <DialogContent>
          {formData && formData.length > 0 && currentFormIndex < formData.length && (
            <>
              <Typography variant="h5">Form for Timestamp: {formData[currentFormIndex].timestamp}</Typography>
              <List>
                {formData[currentFormIndex].questions.map((question, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`Question: ${question.question}`} />
                    {question.options && (
                      <ListItemText primary={`Options: ${question.options.join(', ')}`} />
                    )}
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </DialogContent>
      </Dialog>
    </ScreenWrapper>
  );
}

export default ReviewScreen;
