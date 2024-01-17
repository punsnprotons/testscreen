import React,{useState} from 'react';
import Demo from './subcomponents/Demo'
import ScreenWrapper from './ScreenWrapper';
import ProgressIndicator from './subcomponents/ProgressIndicator';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material'; 
import { useLocation } from 'react-router-dom';



function CreateForm() {

  const location = useLocation();
  let activeStep = 1;

  

  const [videoName, setVideoName] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoNameChange = (e) => {
    setVideoName(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic for handling the form submission
    // You can use videoName and videoFile in your submission logic

    // Reset the form after submission
    setVideoName('');
    setVideoFile(null);
  };


  const navigate = useNavigate();

  const handleContinue = () => {
      navigate('/createlink');
    };

  return (
      <ScreenWrapper  handleClick={handleContinue}>
      <Demo/>
      <ProgressIndicator activeStep={activeStep} />
      <Typography varaint="h2">Create Form Screen</Typography>

      <form onSubmit={handleSubmit}>
      <h2>Upload Your Video</h2>

      <label>
        Video Name:
        <input type="text" value={videoName} onChange={handleVideoNameChange} />
      </label>

      <label>
        Upload Video:
        <input type="file" accept="video/*" onChange={handleFileChange} />
      </label>

      <div style={{ marginTop: '20px' }}>
        {videoFile ? (
          <video
            src={URL.createObjectURL(videoFile)}
            width="320"
            height="240"
            controls
          />
        ) : (
          <div style={{ width: '320px', height: '240px', backgroundColor: '#f0f0f0' }}>
            {/* Placeholder for thumbnail or grayed-out area */}
          </div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>

      </ScreenWrapper>
  );
}

export default CreateForm
