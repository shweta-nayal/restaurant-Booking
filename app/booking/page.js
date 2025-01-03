'use client';
import { useState } from 'react';
import styles from './styles.module.css';

export default function BookingPage() {
  // State to store form input values
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [seatNumber, setSeatNumber] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [formattedTime, setFormattedTime] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert time to 12-hour format with AM/PM
    const [hours, minutes] = time.split(':');
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${minutes} ${period}`;

    // Format date to dd-mm-yyyy
    const [year, month, day] = date.split('-');
    const formattedDate = `${day}-${month}-${year}`;

    // Generate a random seat number between 1 and 100
    const randomSeat = Math.floor(Math.random() * 100) + 1;
    setSeatNumber(randomSeat);

    // Store formatted values
    setFormattedDate(formattedDate);
    setFormattedTime(formattedTime);

    // Show the popup
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Book a Table</h2>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formField}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className={styles.inputField}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              className={styles.inputField}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="time">Time</label>
            <input
              id="time"
              type="time"
              className={styles.inputField}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="guests">Guests</label>
            <input
              id="guests"
              type="number"
              className={styles.inputField}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>

      {/* Popup for confirmation */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Booking Confirmation</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Date:</strong> {formattedDate}</p>
            <p><strong>Time:</strong> {formattedTime}</p>
            <p><strong>No. of Guests:</strong> {guests}</p>
            <p><strong>Seat Number:</strong> {seatNumber}</p>
            <button onClick={closePopup} className={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
