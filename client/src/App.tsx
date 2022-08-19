import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/App.css';
import { Navigation, About, Footer, Hamburger, Home } from './components/index';

function App() {
  return (
    <div id='app' className="App">
      <BrowserRouter>
        <Navigation />
        <Hamburger />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
