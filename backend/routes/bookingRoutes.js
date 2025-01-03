// backend/routes/bookingRoutes.js
const express = require('express');
const Booking = require('../models/booking');
const router = express.Router();

// Create a new booking
router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    res.status(400).json({ message: 'Booking failed', error });
  }
});

// Get all bookings (for testing)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving bookings', error });
  }
});

module.exports = router;
