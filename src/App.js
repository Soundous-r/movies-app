// src/App.js
import React, { useState } from 'react';
import moviesData from './moviesData'; 
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css'; 

const App = () => {
  
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState(''); 
  const [ratingFilter, setRatingFilter] = useState(0); 
  // Function to add a new movie
  const addMovie = () => {
    const title = prompt('Enter movie title:');
    const description = prompt('Enter movie description:');
    const posterUrl = prompt('Enter poster image URL:');
    const rate = parseFloat(prompt('Enter movie rating (1-5):'));
  
    if (title && description && posterUrl && !isNaN(rate)) {
      const newMovie = { id: Date.now(), title, description, posterUrl, rate };
      setMovies([...movies, newMovie]);
    } else {
      alert('Please provide valid movie details.');
    }
  };
  // Filter movies 
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rate >= ratingFilter
  );

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
      <button className="add-button" onClick={addMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} /> 
    </div>
  );
};

export default App;
