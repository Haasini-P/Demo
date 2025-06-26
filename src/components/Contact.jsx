import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <p>Learn more about our app and how we can help you.</p>
            <div className="social-icons">
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSuIWGSSdkWl6S-dJnDCKQMTuty3MvhbrJw&s" alt="Instagram" /></a>
                <a href="#"><img src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png" alt="Facebook" /></a>
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGWFvs8Qvk6MzFRoFSdhkk_rRQOvIKvP9cQ&s" alt="Twitter" /></a>
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ASvbXRCTzEYt_v1X_nDLt6hPQPejFWUUyA&s" alt="Pintrest" /></a>
            </div>
            <div className="company-info">
                <h3>Company</h3>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>
            <div className="help-options">
                <h3>Help</h3>
                <ul>
                    <li>Support</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </section>
    );
};

export default Contact;