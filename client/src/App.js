import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HandleInput from './components/HandleInput.js';
import LandingPage from './components/LandingPage.js';

function App() {
  return ( 
  <Router>
    <div className="App"> 
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/handle-input" element={<HandleInput />} />
  
      </Routes>
    </div>
  </Router>
  );
}

export default App;


/*
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HandleInput from './components/HandleInput';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/handle-input" component={HandleInput} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
*/