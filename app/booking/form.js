'use client';

import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or show confirmation)
    console.log(formData); // Log the data for now (you can replace this with API call)
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <label htmlFor="date">Date and Time</label>
      <input
        type="datetime-local"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      
      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        required
      />
      
      <button type="submit">Submit Booking</button>
    </form>
  );
};

export default Form;
