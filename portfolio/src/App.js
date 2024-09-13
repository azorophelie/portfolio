// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Header from './components/Header';

import './SCSS/main.scss';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      
      </Routes>
     
    </Router>
  );
};

export default App;
