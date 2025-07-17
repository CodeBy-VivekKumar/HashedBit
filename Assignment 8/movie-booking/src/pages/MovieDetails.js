import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Movie Details - Movie {id}</h2>
      <img src={`/movie${id}.jpg`} alt={`Movie ${id}`} style={{ width: 300 }} />
      <p>Description for Movie {id}</p>
      <button onClick={() => navigate(`/book/${id}`)}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;