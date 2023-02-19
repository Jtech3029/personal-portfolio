import React, { FC } from 'react';
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default App;
