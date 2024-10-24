// src/components/Header.js
import React from 'react';
import './Header.css';
import headerGif from '../../assets/Rick.gif'; // Asegúrate de colocar el GIF en la carpeta assets

const Header = () => {
  return (
    <header className="header">
      <img src={headerGif} alt="Rick and Morty" className="header-image" />
      <h1 className="header-title">Rick and Morty</h1>
      <nav className="nav">
        <a href="/">INICIO</a>
        <a href="/aliens">ALIENS</a>
        <a href="/humans">HUMANS</a>
        <a href="/about">ACERCA DE</a>
      </nav>
    </header>
  );
};

export default Header;
