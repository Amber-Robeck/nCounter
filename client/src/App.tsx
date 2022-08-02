import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';

function App() {
  return (
    <div id='app' className="App">
      <Navigation />
      <About />
    </div>
  );
}

export default App;
