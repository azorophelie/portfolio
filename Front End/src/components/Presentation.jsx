import React from 'react';
import presentationData from '../data/details.json';


const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

const Presentation = () => {
  return (
    <div className='intro-container'>
    <div className='introduction'>
      <h1>{presentationData.presentation.intro}</h1>
      <div className='buttons-intro'>
      <button onClick={() => handleButtonClick('mailto:example@example.com')}>
          <i className="fas fa-envelope"></i> Me contacter
        </button>
        <button onClick={() => handleButtonClick('path/to/cv.pdf')}>
          <i className="fas fa-file-pdf"></i> Mon CV
        </button>
        <button onClick={() => handleButtonClick('https://github.com/azorophelie')}>
          <i className="fab fa-github"></i> GitHub
        </button>
      </div>
     
    </div>
    <div className='presentation'>
    <h2>Présentation</h2>
    <p>{presentationData.presentation.name}</p>
    <p>{presentationData.presentation.age}</p>
    <p>{presentationData.presentation.background}</p>
    <p>{presentationData.presentation.mission}</p>
     </div>
     </div>
  );
};

export default Presentation;
