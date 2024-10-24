// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import './HomePage.css';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character/');
      const data = await response.json();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);

  return (
    <div className="home-page">
      <h2>Personajes de Rick And Morty</h2>
      <div className="character-grid">
        {characters.length > 0 ? (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p>Cargando personajes...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
