'use client';
import { useState } from 'react';
import styles from './signup.module.css';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Handle sign-up logic here
    alert(`Account created for ${name}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Sign Up</h2>
      </div>
      
      <div className={styles.formContainer}>
        <form onSubmit={handleSignUp} className={styles.form}>
          <div className={styles.formField}>
            <label htmlFor="name">Full Name</label>
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
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className={styles.inputField}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className={styles.submitButton}>Sign Up</button>
        </form>
        <div className={styles.loginLink}>
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}
