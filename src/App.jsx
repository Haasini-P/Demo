import React from 'react';
import './App.css';

// Import all the components
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

function App() {
  return (
    <div className="App">
      <Header />
      <main>
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
    </div>
  );
}

export default App;