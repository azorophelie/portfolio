// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 


import Header from './components/Header';
import Presentation from './components/Presentation';
import Skills from './components/Skills';



import './SCSS/main.scss';


const App = () => {
  return (
    <Router>
      <Header />
      <Presentation />
      <hr className="separator"></hr>
      <Skills />
     
    
      
      
     
    </Router>
  );
};

export default App;
