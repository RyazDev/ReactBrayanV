// src/pages/CharacterPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../CharacterPage/CharacterPage.css';

const CharacterPage = () => {
  const { id } = useParams(); // Toma el ID del personaje de la URL
  const [character, setCharacter] = useState(null); // Estado para almacenar datos del personaje

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error al obtener los datos del personaje:", error);
      }
    };
    fetchCharacter();
  }, [id]); // Vuelve a cargar si cambia el ID

  if (!character) return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos

  return (
    <div className="character-page">
      <h2>{character.name}</h2>
      <div className="character-info">
        <img src={character.image} alt={character.name} className="character-image" />
        <div className="character-details">
          <p><strong>Estado:</strong> {character.status}</p>
          <p><strong>Especie:</strong> {character.species}</p>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Origen:</strong> {character.origin.name}</p>
          <p><strong>Última ubicación conocida:</strong> {character.location.name}</p>
          <p><strong>Apariciones en episodios:</strong> {character.episode.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;


