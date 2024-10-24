// src/components/CharacterCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CharacterCard/CharacterCard.css';

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <button onClick={handleDetailsClick}>Ver Detalles</button>
    </div>
  );
};

export default CharacterCard;
