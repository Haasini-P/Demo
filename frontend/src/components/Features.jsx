import React, { useState } from 'react';
import Modal from './Modal.jsx';

const featuresData = [
    {
        id: 'modal1',
        imgSrc: '/images/DALL·E 2024-10-23 14.29.13 - A digital marketplace interface featuring a blockchain-enabled platform for handcrafted products. The screen shows various artisan-made items, like te.webp',
        title: 'Blockchain-enabled transactions',
        description: 'In CraftConnect, blockchain technology plays a crucial role in ensuring transparency, fairness, and trust... (full text here)'
    },
    {
        id: 'modal2',
        imgSrc: '/images/DALL·E 2024-10-23 14.32.11 - A digital dashboard showcasing AI-driven trend forecasting for handcrafted products. The interface features graphs and charts predicting upcoming tren.webp',
        title: 'AI-driven trend forecasting',
        description: 'In CraftConnect, AI-driven trend forecasting empowers artisans to stay ahead of market demands... (full text here)'
    },
    {
        id: 'modal3',
        imgSrc: '/images/DALL·E 2024-10-20 22.59.34 - A user interface displaying an AI-powered customization tool for handcrafted products, such as a customized fabric design. The tool showcases options .webp',
        title: 'AI-powered customization tools',
        description: 'In CraftConnect, AI-powered customization tools enhance the user experience... (full text here)'
    },
    {
        id: 'modal4',
        imgSrc: '/images/DALL·E 2024-10-20 22.59.31 - A sleek digital interface showing an artisan product (like a handcrafted vase) being previewed in augmented reality. The product is floating in front .webp',
        title: 'VR showrooms for immersive exploration',
        description: "CraftConnect's VR showrooms offer an immersive, next-generation shopping experience... (full text here)"
    },
    {
        id: 'modal5',
        imgSrc: '/images/DALL·E 2024-10-20 22.59.37 - A clean and interactive user interface of an e-learning platform focused on traditional crafts. The platform showcases online courses with thumbnail p.webp',
        title: 'E-Learning platform',
        description: 'The E-Learning platform within CraftConnect is designed to preserve and promote traditional crafts... (full text here)'
    }
];

const Features = () => {
    const [activeModal, setActiveModal] = useState(null);

    return (
        <section id="features" className="section">
            <h2>Features</h2>
            <div className="features-gallery">
                {featuresData.map((feature) => (
                    <div key={feature.id} className="feature">
                        <div className="image-container" onClick={() => setActiveModal(feature.id)}>
                            <img src={feature.imgSrc} alt={feature.title} />
                        </div>
                        <p>{feature.title}</p>
                    </div>
                ))}
            </div>

            {featuresData.map((feature) => (
                <Modal 
                    key={feature.id} 
                    isOpen={activeModal === feature.id} 
                    onClose={() => setActiveModal(null)}
                >
                    <img src={feature.imgSrc} alt={feature.title} />
                    <div>
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>
                </Modal>
            ))}
        </section>
    );
};

export default Features;