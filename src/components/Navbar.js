'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <Link href="/">Demo Restaurant</Link>
      </div>

      {/* Hamburger Menu */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isMenuOpen ? styles.open : ''}>&#9776;</span>
      </div>

      {/* Navigation Links */}
      <div className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/booking">Book Now</Link>
        <Link href="/login">
          <span className={styles.loginIcon}>🔑</span> Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
