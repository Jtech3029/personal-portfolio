import React, { FC } from 'react';
import "../styles/Navigation.css";

const Navigation: FC = () => {
  return (
    <nav className='navigation-bar'>
      <a href="#about" className="nav-button">About</a>
      <a href="#projects" className="nav-button">Projects</a>
      <a href="#contact" className="nav-button">Contact Me</a>
    </nav>
  );
};

export default Navigation;
