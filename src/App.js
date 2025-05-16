import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Preloader from './components/Preloader';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState(false);

  return (
    <div className={"App " + (mode === true ? "dark-layout bg-dark-img" : "bg-light-img")}>
      <Preloader />
      <Header mode={mode} setMode={setMode} />
      <Dashboard mode={mode} />
      <Footer />
    </div>
  );
}

export default App;
