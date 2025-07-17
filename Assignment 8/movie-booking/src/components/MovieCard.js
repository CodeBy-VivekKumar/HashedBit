import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ id, title, image }) => {
  const navigate = useNavigate();
  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <img src={image} alt={title} style={{ width: '100%' }} />
      <h4>{title}</h4>
      <button onClick={() => navigate(`/movie/${id}`)}>View Details</button>
    </div>
  );
};

export default MovieCard;