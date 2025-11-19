import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { moviesData } from './data/moviesData'; // Import data
import MovieCard from './components/MovieCard'; // Import component

// 1. Create a Home Component (Your original landing content)
const Home = () => {
  return (
    <div className="container">
      <h1 className="tagline">Your Gateway to the world of Movies.</h1>
      {/* Link to the movies page */}
      <Link to="/movies">
        <button className="watch-btn">Watch More</button>
      </Link>
    </div>
  );
};

// 2. Create the Movies Page Component
const MoviesPage = () => {
  return (
    <div className="movies-page">
      <h2 style={{ textAlign: 'center', marginTop: '20px', color: '#83c460' }}>
        Trending Now
      </h2>
      <div className="movies-grid">
        {moviesData.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

// 3. Main App Component with Routing
function MovieSite() {
  return (
    <Router>
      {/* HEADER (Stays on all pages) */}
      <div className="header">
        <div className="logo">Chris Movies</div>
        
        <div className="chooseLinks">
          <Link to="/">Home</Link> {/* Changed to Link */}
          <Link to="/movies">Movies</Link> {/* Changed to Link */}
          <a href="#">Series</a>
        </div>
        
        <div className="headerLinks">
          <button>
            <i className="fa-solid fa-search"></i>
          </button>
          <a className="log" href="#">Log in</a>
          <a className="sub" href="#">Subscribe</a>
        </div>
      </div>

      {/* ROUTES (Changes based on URL) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>

      {/* FOOTER (Stays on all pages) */}
      <div className="footer">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <p> &copy; Chris movies 2025</p>
      </div>
    </Router>
  );
}

export default MovieSite;