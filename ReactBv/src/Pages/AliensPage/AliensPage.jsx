// src/pages/AliensPage.js
import React, { useEffect, useState } from 'react';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import './AliensPage.css';

const AliensPage = () => {
  const [aliens, setAliens] = useState([]);

  useEffect(() => {
    const fetchAliens = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character/?species=alien');
      const data = await response.json();
      setAliens(data.results);
    };
    fetchAliens();
  }, []);

  return (
    <div className="aliens-page">
      <h2>Personajes Alienígenas</h2>
      <div className="character-grid">
        {aliens.map((alien) => (
          <CharacterCard key={alien.id} character={alien} />
        ))}
      </div>
    </div>
  );
};

export default AliensPage;
