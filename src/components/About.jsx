import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="description">
                    <h2>Empowering Artisans</h2>
                    <p>
                        CraftConnect is an innovative platform that brings together rural artisans and global consumers. We aim to empower artisans by preserving traditional crafts and ensuring transparency in trade.
                    </p>
                    <p>
                        With features like AI customization, blockchain-enabled transactions, and AR storytelling, CraftConnect connects consumers to authentic handcrafted products while promoting sustainability and fair trade.
                    </p>
                    <p>CraftConnect isn't just a marketplace; it’s a movement to uplift marginalized communities, preserve timeless craftsmanship, and promote ethical consumption on a global scale.</p>
                </div>
                <div className="image">
                    <img src="https://images.pexels.com/photos/11137371/pexels-photo-11137371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Artisan at work" />
                </div>
            </div>
        </section>
    );
};

export default About;