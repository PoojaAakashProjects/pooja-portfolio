import React from 'react';
import resume from '../images/Pooja_Resume_2023.pdf';

const ResumePage = () => {
  return (
    <div>
      <embed src={resume} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

export default ResumePage;
