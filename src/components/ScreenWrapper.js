import React from 'react';
import ContinueButton from './subcomponents/ContinueButton';
import Demo from './subcomponents/Demo'
import ProgressIndicator from './subcomponents/ProgressIndicator';

const ScreenWrapper = ({ children, handleClick}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', marginHorizontal:'30px' }}>
      <div style={{ flex: 1, paddingBottom: '16px', }}>
        {/* Content of the screen */}
        {children}
      </div>
      <div style={{ alignSelf: 'flex-end', marginRight: '16px' }}>
        <ContinueButton handleClick={handleClick} />
      </div>
    </div>
  );
};

export default ScreenWrapper;
