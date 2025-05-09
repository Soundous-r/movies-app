// src/components/Filter.js
import React from 'react';

const Filter = ({ setTitleFilter, setRatingFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="title..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
