// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 


import Header from './components/Header';
import Presentation from './components/Presentation';
import Formation from './components/Formation';
import Skills from './components/Skills';
import Projects from './pages/Projects'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/Scroll';


import './SCSS/main.scss';


const App = () => {
  return (
    <Router> 
      <div className="page-container">
      <Header />
            <section id="presentation">
                <Presentation />
            </section>
            <Formation />
            <hr className="separator"></hr>
            <section id="competences">
                <Skills />
            </section>
            <hr className="separator"></hr>
            <section id="projects">
          <Projects />
      </section>
      <hr className='separator'></hr>
      <section id="contact">
        <Contact />
      </section>
      <ScrollToTopButton />
      </div>
      <Footer />
      
    </Router>
  );
};

export default App;
