import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookingFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/confirmation', { state: { ...formData, movieId: id } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Booking Form for Movie {id}</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required /><br/>
      <input name="email" placeholder="Email" onChange={handleChange} required /><br/>
      <input name="mobile" placeholder="Mobile" onChange={handleChange} required /><br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingFormPage;