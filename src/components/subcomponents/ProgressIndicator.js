import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProgressContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '20px',
  width: '100%',
  marginHorizontal:'20px'

});

const CircleContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Circle = styled('div')(({ theme,active }) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: active ? '#583BC9' : '#7C5CF5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ArrowIcon = styled(ArrowForwardIcon)({
  color: 'gray',
  fontSize: '20px',
  marginLeft: '10px',
});

const Text = styled('div')({
  textAlign: 'center',
  fontSize: '14px',
  marginTop:'10px',
  marginHorizontal:'10px',
  fontWeight:'inherit',
});

const ProgressIndicator = ({ activeStep }) => {
  const steps = [
    { label: 'Upload video', icon: 1 },
    { label: 'Select Timestamps', icon: 2 },
    { label: 'Create feedback form', icon: 3 },
    { label: 'Create magic link', icon: 4 },
    { label: 'Analyze results', icon: 5 },
  ];

  return (
    <ProgressContainer>
      {steps.map((step, index) => (
        <React.Fragment key={step.icon}>
          <CircleContainer>
            <Circle active={activeStep === step.icon} >{step.icon}</Circle>
            {index < steps.length  && <Text>{step.label}</Text>}
          </CircleContainer>
          {index < steps.length - 1 && <ArrowIcon />}
          
        </React.Fragment>
      ))}
    </ProgressContainer>
  );
};

export default ProgressIndicator;
