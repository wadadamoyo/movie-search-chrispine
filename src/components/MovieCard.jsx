import React from 'react';
import '../App.css'; // Import styles to use your variables if needed

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster_path} alt={movie.title} className="card-img" />
      
      <div className="card-content">
        <h3>{movie.title}</h3>
        <div className="card-meta">
          <span>📅 {movie.release_date.split('-')[0]}</span>
          <span>⭐ {movie.vote_average}</span>
        </div>
        <p className="card-desc">
          {movie.overview.substring(0, 80)}...
        </p>
        <button className="card-btn">Details</button>
      </div>
    </div>
  );
};

export default MovieCard;