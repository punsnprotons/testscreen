import React from 'react';
import Demo from './subcomponents/Demo'
import ScreenWrapper from './ScreenWrapper';
import ProgressIndicator from './subcomponents/ProgressIndicator';

const Home = () => {
  return (
    <ScreenWrapper>
      <Demo/>
      <ProgressIndicator numCircles={5} /> 
    </ScreenWrapper>
  );
};

export default Home;