import React from 'react';
import './App.css';
import { Navigation, About, Footer } from './components/index';

function App() {
  return (
    <div id='app' className="App">
      <Navigation />
      <About />
      <Footer />
    </div>
  );
}

export default App;
