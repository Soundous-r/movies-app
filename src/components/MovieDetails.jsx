// src/components/MovieDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found.</h2>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>Rating: {movie.rate} ⭐</p>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
