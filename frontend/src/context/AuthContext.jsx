// frontend/src/context/AuthContext.jsx

import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('token');
  });
  // --- CHANGE: Initialize user from localStorage if possible ---
  // This helps keep the user's name visible after a page refresh
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = useCallback(async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();

      if (response.ok) {
        // --- CHANGE: Store both token and user data ---
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user)); // Store user object
        setIsAuthenticated(true);
        setUser(data.user);
      } else {
        throw new Error(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error; 
    }
  }, []);

  const signup = useCallback(async (name, email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        return await login(email, password);
      } else {
        const data = await response.json();
        alert(data.message || 'Signup failed');
        return false;
      }
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  }, [login]);

  // --- THIS IS THE CRITICAL FIX ---
  // Your previous logout function was empty.
  const logout = useCallback(() => {
    // 1. Remove the token and user data from storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // 2. Update the application's state
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  const value = useMemo(() => ({
    isAuthenticated,
    user,
    login,
    signup,
    logout,
  }), [isAuthenticated, user, login, signup, logout]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);