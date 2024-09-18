// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


import Header from './components/Header';
import Presentation from './components/Presentation';



import './SCSS/main.scss';


const App = () => {
  return (
    <Router>
      <Header />
      <Presentation />
     
      <Routes>
      
      </Routes>
     
    </Router>
  );
};

export default App;
