import React from 'react';

const testimonialsData = [
    {
        name: "Mary Jonathan",
        location: "New York, USA",
        imgSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quote: "\"CraftConnect has completely transformed my business. As a rural artisan, I struggled to find customers beyond my local community. Thanks to CraftConnect’s blockchain-enabled marketplace, my products now reach buyers from across the world, and I get fair pricing for my work!\""
    },
    {
        name: "Jane Smith",
        location: "Maple street, UK",
        imgSrc: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quote: "\"As someone passionate about cultural heritage, I love the e-learning platform on CraftConnect. I’ve taken courses on woodcarving and embroidery, taught by master artisans from different cultures. It’s amazing to learn these techniques supporting the preservation of traditional crafts.\""
    },
    {
        name: "Emily Johnson",
        location: "Colorado, Russia",
        imgSrc: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quote: "\"The customization feature on CraftConnect is unlike anything I’ve experienced before. I was able to personalize a handcrafted vase with my own design through their AR visualization tool, and seeing it in real-time made the whole process incredibly interactive and enjoyable!\""
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section">
            <h2>Testimonials</h2>
            {testimonialsData.map((testimonial, index) => (
                <div key={index} className="testimonial-box">
                    <div className="icon-container">
                        <img src={testimonial.imgSrc} alt={testimonial.name} />
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.location}</p>
                    </div>
                    <p>{testimonial.quote}</p>
                </div>
            ))}
        </section>
    );
};

export default Testimonials;