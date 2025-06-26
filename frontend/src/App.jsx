// --- CHANGE 1: Import useState, useEffect, and axios ---
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Team from './components/Team.jsx';
import Testimonials from './components/Testimonials.jsx';
import Auth from './components/Auth.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';

function App() {
  // --- CHANGE 2: Add state and the data fetching logic ---
  const [backendStatus, setBackendStatus] = useState('Connecting...');

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:5000/')
      .then(response => {
        // If successful, update the status with the backend's message
        setBackendStatus(response.data);
      })
      .catch(error => {
        // If there's an error, update the status to show failure
        console.error("Error connecting to backend:", error);
        setBackendStatus("Offline - Could not connect");
      });
  }, []); // The empty array [] ensures this effect runs only once

  return (
    <div className="App">
      <Header />
      <main>
        {/* --- CHANGE 3: Display the backend status message --- */}
        {/* This is a simple way to see if your connection is working. */}
        {/* You can remove this div later. */}
        <div style={{ 
          padding: '8px', 
          backgroundColor: '#333', 
          color: 'white', 
          textAlign: 'center', 
          fontWeight: 'bold' 
        }}>
          Backend Status: {backendStatus}
        </div>
        
        <Home />
        <ImageSlider />
        <About />
        <Features />
        <Team />
        <Testimonials />
        <Auth />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;