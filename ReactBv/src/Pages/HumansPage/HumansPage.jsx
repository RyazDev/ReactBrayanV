// src/pages/HumansPage.js
import React, { useEffect, useState } from 'react';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import './HumansPage.css';

const HumansPage = () => {
  const [humans, setHumans] = useState([]);

  useEffect(() => {
    const fetchHumans = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character/?species=human');
      const data = await response.json();
      setHumans(data.results);
    };
    fetchHumans();
  }, []);

  return (
    <div className="humans-page">
      <h2>Personajes Humanos</h2>
      <div className="character-grid">
        {humans.map((human) => (
          <CharacterCard key={human.id} character={human} />
        ))}
      </div>
    </div>
  );
};

export default HumansPage;
