import React, { useState, useEffect } from 'react';
import { BANCO_DE_DADOS_FILMES, type Movie } from './moviesData';
import Logo from './Logo'; 
import './App.css';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]); 
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true); 
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMovies(BANCO_DE_DADOS_FILMES);
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  const fetchMovies = (query: string) => {
    setLoading(true);
    
    setTimeout(() => {
      if (!query.trim()) {
        setMovies(BANCO_DE_DADOS_FILMES);
      } else {
        const filtrados = BANCO_DE_DADOS_FILMES.filter(movie => 
          movie.Title.toLowerCase().includes(query.toLowerCase())
        );
        setMovies(filtrados);
      }
      setLoading(false);
    }, 1200); 
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMovies(search);
  };

  const heroMovie = movies[0]; 

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">
          <Logo />
          Cyncly<span>Flix</span>
        </h1>
        
        <form onSubmit={handleSearchSubmit} className="search-box">
          <input 
            type="text" 
            placeholder="Search (e.g. Avengers, Batman, Spider-Man)..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input"
          />
          <button type="submit" className="button">Search</button>
        </form>
      </header>

      <main className="main">
        {loading ? (
          <div>
            <h2 className="section-title">Searching the catalog...</h2>
            <div className="grid">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="skeleton-card">
                  <div className="skeleton-poster"></div>
                  <div className="skeleton-info">
                    <div className="skeleton-line title"></div>
                    <div className="skeleton-line year"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {movies.length === 0 ? (
              <p className="text-status">No movies found for this search.</p>
            ) : (
              <>
                
                {heroMovie && !search && (
                  <section className="hero">
                    <div className="hero-bg">
                      <img src={heroMovie.Poster} alt="" />
                    </div>
                    <div className="hero-content">
                      <span className="hero-badge">FEATURED</span>
                      <h2 className="hero-title">{heroMovie.Title}</h2>
                      <p className="hero-info">{heroMovie.Year} — {heroMovie.Type.toUpperCase()}</p>
                      <div className="hero-buttons">
                        <button className="btn-play" onClick={() => setSelectedMovie(heroMovie)}>▶ Watch</button>
                        <button className="btn-info" onClick={() => setSelectedMovie(heroMovie)}>ℹ More Information</button>
                      </div>
                    </div>
                  </section>
                )}

                <h2 className="section-title">
                  {search ? `Resultados para "${search}"` : 'Filmes Populares'}
                </h2>

                <div className="grid">
                  {movies.map((movie) => (
                    <div 
                      key={movie.imdbID} 
                      className="card" 
                      onClick={() => setSelectedMovie(movie)}
                    >
                      <img src={movie.Poster} alt={movie.Title} className="poster" />
                      <div className="card-info">
                        <h3 className="movie-title">{movie.Title}</h3>
                        <span className="movie-year">{movie.Year} — {movie.Type.toUpperCase()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </main>

      
      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMovie(null)}>&times;</button>
            <div className="modal-body">
              <div className="modal-poster-wrapper">
                <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="modal-poster" />
              </div>
              <div className="modal-details">
                <span className="modal-badge">{selectedMovie.Type.toUpperCase()}</span>
                <h2 className="modal-title">{selectedMovie.Title}</h2>
                <p className="modal-meta">Release Year: <strong>{selectedMovie.Year}</strong></p>
                <p className="modal-meta">ID IMDb: <span className="modal-imdb">{selectedMovie.imdbID}</span></p>
                <p className="modal-synopsis">
                  {selectedMovie.Synopsis}
                </p>
                <button className="modal-btn-play">▶ Play Title</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
