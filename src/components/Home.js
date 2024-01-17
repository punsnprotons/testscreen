import React from 'react';
import Demo from './subcomponents/Demo'
import ScreenWrapper from './ScreenWrapper';
import ProgressIndicator from './subcomponents/ProgressIndicator';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';


const Home = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        
        navigate('/selecttime');
      };

    return (
        <ScreenWrapper  handleClick={handleContinue}>
        <Demo/>
        <ProgressIndicator/> 
        <Typography varaint="h3">Home Screen</Typography>
        </ScreenWrapper>
    );
};

export default Home;