// src/pages/AboutPage.js
import React from 'react';
import './AboutPage.css';
import rickAndMortyImage from '../../assets/Api.jpg'; // Asegúrate de reemplazar esta ruta con la correcta

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2>Acerca de Esta Aplicación</h2>
      <img src={rickAndMortyImage} alt="Rick and Morty" className="about-image" />
      <p>Esta es una aplicación que muestra los personajes de la serie "Rick And Morty".</p>
      <p>Utiliza la API de Rick And Morty para obtener información sobre los personajes.</p>
    </div>
  );
};

export default AboutPage;
