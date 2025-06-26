import React, { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        // In a real app, you would send the email to your backend/mailing list service.
        // For this demo, we'll simulate it with localStorage and a success message.
        console.log(`Newsletter signup for: ${email}`);
        localStorage.setItem('newsletter_subscriber', email);
        
        setSubscribed(true);
        setEmail('');

        // Reset the message after a few seconds
        setTimeout(() => {
            setSubscribed(false);
        }, 5000);
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <p>Learn more about our app and how we can help you.</p>
            
            <div className="contact-container">
                <div className="contact-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </div>
                
                <div className="contact-column">
                    <h3>Help</h3>
                    <ul>
                        <li>Support</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="contact-column">
                    <h3>Join Our Newsletter</h3>
                    <p>Get the latest updates on our artisans and products.</p>
                    {subscribed ? (
                        <p className="success-message">Thank you for subscribing!</p>
                    ) : (
                        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    )}
                </div>
            </div>

            <div className="social-icons">
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSuIWGSSdkWl6S-dJnDCKQMTuty3MvhbrJw&s" alt="Instagram" /></a>
                <a href="#"><img src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png" alt="Facebook" /></a>
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGWFvs8Qvk6MzFRoFSdhkk_rRQOvIKvP9cQ&s" alt="Twitter" /></a>
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ASvbXRCTzEYt_v1X_nDLt6hPQPejFWUUyA&s" alt="Pinterest" /></a>
            </div>
        </section>
    );
};

export default Contact;