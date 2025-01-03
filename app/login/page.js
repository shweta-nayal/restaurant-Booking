'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    const isAuthenticated = email === 'user@example.com' && password === 'password'; // Dummy check

    if (isAuthenticated) {
      router.push('/booking');
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Login</h2>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleLogin} className={styles.form}>
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

          <button type="submit" className={styles.submitButton}>Login</button>
          
          <div className={styles.registerLink}>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
