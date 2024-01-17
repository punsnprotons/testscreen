import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledContinueButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  width: '150px', // Adjust width as needed
  height: '50px', // Adjust height as needed
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '50px',
  color: 'white',
  backgroundColor:'#7C5CF5',
  fontFamily:'sans-serif'
}));

const ContinueButton = () => {
  return (
    <StyledContinueButton variant="contained">
      Continue
    </StyledContinueButton>
  );
};

export default ContinueButton;
