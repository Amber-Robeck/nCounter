import React from 'react';
import './assets/css/App.css';
import { Navigation, About, Footer, Hamburger } from './components/index';

function App() {
  return (
    <div id='app' className="App">
      <Navigation />
      <Hamburger />
      <About />
      <Footer />
    </div>
  );
}

export default App;
