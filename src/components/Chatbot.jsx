import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- Project Context for the Chatbot ---
// This detailed prompt primes the AI to be a specialized assistant for your project.
const projectContext = `
You are a friendly and helpful assistant for CraftConnect. 
Your goal is to answer questions about the CraftConnect project.
Be concise and helpful. If a question is not related to CraftConnect, 
politely state that you can only answer questions about the CraftConnect project.

Here is the information about CraftConnect:
- **Mission**: To empower rural artisans and preserve traditional culture by connecting them with global consumers.
- **Platform**: An innovative platform that uses technology to ensure transparency and fair trade.
- **Key Features**:
  1.  **Blockchain-enabled Transactions**: Ensures secure, transparent, and fair payments directly to artisans. It tracks the product's entire lifecycle.
  2.  **AI-driven Trend Forecasting**: Helps artisans understand market demands, popular designs, and colors to stay competitive.
  3.  **AI-powered Customization Tools**: Allows customers to co-create unique products by modifying materials, colors, and designs.
  4.  **VR Showrooms**: Offers an immersive virtual reality experience for customers to explore handcrafted products from home.
  5.  **E-Learning Platform**: Provides online courses and workshops for artisans to learn new skills and preserve traditional crafts.
- **The Team**: The project was founded by P.Haasini (Management), P.Satvika (Design & Tech), and Syed Ameena (Market & Engineering).
- **Target Audience**: Global consumers interested in authentic, handcrafted, and ethically sourced products, and rural artisans seeking a wider market.
`;


const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [chat, setChat] = useState(null);
    const messagesEndRef = useRef(null);

    // Initialize the Chat on component mount
    useEffect(() => {
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const initializedChat = model.startChat({
            history: [
                { role: "user", parts: [{ text: projectContext }] },
                { role: "model", parts: [{ text: "Hello! I'm the CraftConnect assistant. How can I help you learn about our project today?" }] },
            ],
            generationConfig: {
                maxOutputTokens: 1000,
            },
        });

        setChat(initializedChat);
        setMessages([
            { role: 'model', text: "Hello! I'm the CraftConnect assistant. How can I help you learn about our project today?" }
        ]);
    }, []);

    // Scroll to the bottom of the messages list when new messages are added
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || loading || !chat) return;

        const userInput = input;
        setLoading(true);
        setInput('');

        // Add user message to UI immediately
        setMessages(prev => [...prev, { role: 'user', text: userInput }]);

        try {
            const result = await chat.sendMessage(userInput);
            const response = result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: 'model', text }]);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong. Please try again." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* --- Chat Window --- */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h3>CraftConnect Helper</h3>
                        <button onClick={() => setIsOpen(false)}>×</button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.role}`}>
                                {msg.text}
                            </div>
                        ))}
                        {loading && <div className="message model">Thinking...</div>}
                        <div ref={messagesEndRef} />
                    </div>
                    <form className="chat-input-form" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about CraftConnect..."
                            disabled={loading}
                        />
                        <button type="submit" disabled={loading}>Send</button>
                    </form>
                </div>
            )}

            {/* --- Floating Chat Button --- */}
            <button className="chat-fab" onClick={() => setIsOpen(prev => !prev)}>
                {isOpen ? 'X' : '💬'}
            </button>
        </>
    );
};

export default Chatbot;