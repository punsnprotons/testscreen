import React, { useState, useRef } from 'react';
import Demo from './subcomponents/Demo';
import ScreenWrapper from './ScreenWrapper';
import ProgressIndicator from './subcomponents/ProgressIndicator';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, Slider, Button, Dialog, DialogTitle, DialogContent, TextField, Box, List, ListItem, ListItemText, MenuItem } from '@mui/material';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup } from '@mui/material';



function SelectTimestamps() {
  const navigate = useNavigate();
  const location = useLocation();
  const { videoName, videoFile } = location.state || {};
  const [selectedTimestamp, setSelectedTimestamp] = useState(0);
  const [isFormOpen, setFormOpen] = useState(false);
  const [forms, setForms] = useState([]);
  const [selectedType, setSelectedType] = useState('multipleChoice'); // or initialize with your default type
  const [editingIndex, setEditingIndex] = useState(null); // Add this line


  const videoRef = useRef(null);

  const handleContinue = () => {
    navigate('/createform');
  };

  const handleSliderChange = (event, newValue) => {
    setSelectedTimestamp(newValue);
    if (videoRef.current) {
      videoRef.current.currentTime = (newValue / 100) * videoRef.current.duration;
    }
  };

  const handleOpenForm = () => {
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setEditingIndex(null); // Reset editing index when closing the form
  };

  // Function to handle editing a form
  const handleEditForm = (index) => {
    setEditingIndex(index);
    setFormOpen(true);
  };

  const handleCreateForm = () => {
    // Add logic to handle form creation or editing
    const newForm = {
      timestamp: selectedTimestamp,
      question: 'Get the question value from the text field',
      options: ['Option 1', 'Option 2'], // Get the options value from the text fields
      // Add other form data as needed
    };

    if (editingIndex !== null) {
      // If editing an existing form, replace the form at the editing index
      const updatedForms = [...forms];
      updatedForms[editingIndex] = newForm;
      setForms(updatedForms);
    } else {
      // If creating a new form, add it to the forms array
      setForms((prevForms) => [...prevForms, newForm]);
    }

    handleCloseForm();
  };

  return (
    <ScreenWrapper handleClick={handleContinue}>
      <Demo />
      <ProgressIndicator />
      <Typography variant="h3">Select Timestamp Screen</Typography>

      {videoFile && (
        <div style={{ width: '70%', height: '40%', margin: 'auto', borderRadius: '20px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)' }}>
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
            <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
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
        <Button variant="contained" onClick={handleOpenForm}>
          Open Form
        </Button>
      </div>

      <Dialog open={isFormOpen} onClose={handleCloseForm}>
        <DialogTitle>Timestamp Form</DialogTitle>
        <DialogContent style={{ width: '400px' }}>
          {/* Row 1: Question Input and Type Dropdown */}
          <div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
            <TextField label="Enter question" fullWidth variant="filled" />
            <TextField
              select
              label="Type"
              fullWidth
              variant="filled"
            >
              <MenuItem value="multipleChoice">Multiple Choice</MenuItem>
              <MenuItem value="checkbox">Checkbox</MenuItem>
              <MenuItem value="shortAnswer">Short Answer</MenuItem>
            </TextField>
          </div>

          {/* Row 2: Options or TextField based on Type */}
          <div style={{ marginBottom: '20px' }}>
            {/* Conditionally render options or text field based on selected type */}
            {selectedType === 'multipleChoice' && (
              <>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Options</FormLabel>
                  <RadioGroup>
                    <FormControlLabel value="option1" control={<Radio />} label={<TextField label="Option 1" fullWidth variant="outlined" />} />
                    <FormControlLabel value="option2" control={<Radio />} label={<TextField label="Option 2" fullWidth variant="outlined" />} />
                  </RadioGroup>
                </FormControl>
              </>
            )}
            {selectedType === 'checkbox' && (
              <>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Options</FormLabel>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={<TextField label="Option 1" fullWidth variant="outlined" />} />
                    <FormControlLabel control={<Checkbox />} label={<TextField label="Option 2" fullWidth variant="outlined" />} />
                  </FormGroup>
                </FormControl>
              </>
            )}
            {selectedType === 'shortAnswer' && (
              <TextField label="Answer" fullWidth variant="outlined" />
            )}
          </div>

          {/* Row 3: Hairline */}
          <hr style={{ borderColor: '#ccc', margin: '20px 0' }} />

          {/* Row 4: Save Button */}
          <div style={{ textAlign: 'right' }}>
            <Button variant="contained" onClick={handleCreateForm} style={{ marginTop: '20px' }}>
              Save
            </Button>
          </div>
        </DialogContent>


      </Dialog>

      {/* Display saved forms */}
      {forms.length > 0 && (
        <Box mt={4}>
          <Typography variant="h5">Saved Forms</Typography>
          <List>
            {forms.map((form, index) => (
              <ListItem key={index}>
                <ListItemText primary={`Timestamp: ${form.timestamp}`} />
                <ListItemText primary={`Question: ${form.question}`} />
                {form.options && (
                  <ListItemText primary={`Options: ${form.options.join(', ')}`} />
                )}
                {/* Display other form data as needed */}
                <Button variant="outlined" onClick={() => handleEditForm(index)}>
                  Edit
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </ScreenWrapper>
  );
}

export default SelectTimestamps;
