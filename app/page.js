'use client';

export default function Home() {
  return (
    <div className="landing-page">
      <h1>Welcome to Demo Restaurant</h1>
      <button onClick={() => window.location.href = '/booking'}>Book Now</button>
    </div>
  );
}
