'use client';

import '../src/styles/global.css';
import Navbar from '../src/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Demo Restaurant Booking</title>
      <body>
        <Navbar />
     
        <main>{children}</main> {/* Render page-specific content */}
      </body>
    </html>
  );
}
