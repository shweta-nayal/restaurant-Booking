import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// Function to check if the user is logged in
const isAuthenticated = (req) => {
  // Check for a valid session, token, or authentication cookie
  const token = req.cookies.get('authToken'); // Example of how you might check for a cookie
  
  // If there's no token, user is not authenticated
  return token ? true : false;
};

// Middleware function
export function middleware(req) {
  const url = req.url;

  // Check if the user is trying to access the booking page
  if (url.includes('/booking') && !isAuthenticated(req)) {
    // Redirect to the login page if not authenticated
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Allow the request to proceed if authenticated
  return NextResponse.next();
}

// Middleware configuration
export const config = {
  matcher: ['/booking'], // Only apply to the /booking route
};
