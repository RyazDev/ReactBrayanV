// src/components/FilterButton.js
import React from 'react';
import './FilterButton.css';

const FilterButton = ({ label, onClick }) => {
  return (
    <button className="filter-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default FilterButton;
