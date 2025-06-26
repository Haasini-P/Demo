import React from 'react';

const Home = () => {
  const backgroundImageUrl = 'https://images.pexels.com/photos/4867416/pexels-photo-4867416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  
  return (
    <section id="home" className="section" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="content">
        <h1><b>Empowering Artisans, Preserving Culture</b></h1>
        <p>Our mission is to create a world where every artisan has access to the tools, resources, and opportunities they need to thrive.</p>
        <br />
        <a href="#about" className="btn">Explore</a>
      </div>
    </section>
  );
};

export default Home;