import React from 'react';
import './assets/css/App.css';
import { Navigation, About, Footer, Hamburger, Home } from './components/index';

function App() {
  return (
    <div id='app' className="App">
      <Navigation />
      <Hamburger />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
