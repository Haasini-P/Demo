import React from 'react';
import { useAuth } from '../context/AuthContext.jsx'; // Import the hook

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth(); // Use the context

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/images/Logo.png" alt="CraftConnect Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>

          {/* Conditional rendering for Login/Logout */}
          {isAuthenticated && user ? (
            <>
              <li><span style={{ color: 'orange' }}>Welcome, {user.name}</span></li>
              <li>
                <a href="#home" onClick={logout} style={{ cursor: 'pointer' }}>Logout</a>
              </li>
            </>
          ) : (
            <li><a href="#login">Login</a></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;