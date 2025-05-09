
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import moviesData from './moviesData';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails'; 
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = () => {
    const title = prompt('Enter movie title:');
    const description = prompt(' movie description:');
    const posterUrl = prompt(' poster image URL:');
    const rate = parseFloat(prompt('Enter movie rating:'));
    const trailer = prompt('trailer YouTubelink:');

    if (title && description && posterUrl && trailer && !isNaN(rate)) {
      const newMovie = { id: Date.now(), title, description, posterUrl, rate, trailer };
      setMovies([...movies, newMovie]);
    } else {
      alert('Please provide valid movie details.');
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rate >= ratingFilter
  );

  return (
    <Router>
      <div className="app">
        <h1>Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
                <button className="add-button" onClick={addMovie}>
                  Add Movie
                </button>
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
