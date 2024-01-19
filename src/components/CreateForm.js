import React,{useState} from 'react';
import Demo from './subcomponents/Demo'
import ScreenWrapper from './ScreenWrapper';
import ProgressIndicator from './subcomponents/ProgressIndicator';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material'; 
import { useLocation } from 'react-router-dom';



function CreateForm() {

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/createlink');
    };

  return (
      <ScreenWrapper  handleClick={handleContinue}>
      <Demo/>
      <ProgressIndicator/> 
      <Typography varaint="h3"> Generate Link Screen</Typography>
      </ScreenWrapper>
  );
}

export default CreateForm
