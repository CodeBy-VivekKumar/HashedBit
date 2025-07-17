import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const { state } = useLocation();
  const bookingId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
      <p>Movie ID: {state.movieId}</p>
    </div>
  );
};

export default ConfirmationPage;