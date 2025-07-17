import React from 'react';
import MovieCard from './MovieCard';

const movies = Array.from({ length: 16 }).map((_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
  image: `/movie${i + 1}.jpg`
}));

const MovieList = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;