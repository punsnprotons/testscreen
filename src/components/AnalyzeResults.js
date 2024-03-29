import React from 'react';
import Demo from './subcomponents/Demo'
import ScreenWrapper from './ScreenWrapper';
import ProgressIndicator from './subcomponents/ProgressIndicator';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

function AnalyzeResults() {

  const navigate = useNavigate();

  const handleContinue = () => {
    
    navigate('/results');
      
    };

  return (
      <ScreenWrapper  handleClick={handleContinue}>
      <Demo/>
      <ProgressIndicator/> 
      <Typography varaint="h3">Analyze results Screen</Typography>
      </ScreenWrapper>
  );
}

export default AnalyzeResults
