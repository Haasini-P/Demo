import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext(null);

// This is a custom hook that components will use to access the context
export const useAuth = () => {
    return useContext(AuthContext);
};

// This is the provider component that will wrap our app
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Effect to check localStorage for a user session on initial app load
    useEffect(() => {
        const storedUser = localStorage.getItem('craftconnect_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // --- MOCK API FUNCTIONS ---
    // In a real app, these would make network requests to a backend server.

    const login = (email, password) => {
        // Simulate an API call
        console.log("Attempting login for:", email);
        
        // Hardcoded user for demonstration purposes
        if (email === 'user@example.com' && password === 'password123') {
            const userData = {
                email: 'user@example.com',
                name: 'Alex Doe'
            };
            setUser(userData);
            // Store user session in localStorage to persist login
            localStorage.setItem('craftconnect_user', JSON.stringify(userData));
            return true; // Indicate success
        }
        
        // Check if the user exists from a mock registration
        const registeredUser = JSON.parse(localStorage.getItem(`user_${email}`));
        if (registeredUser && registeredUser.password === password) {
             setUser(registeredUser);
             localStorage.setItem('craftconnect_user', JSON.stringify(registeredUser));
             return true;
        }

        console.error("Login failed: Invalid credentials");
        return false; // Indicate failure
    };

    const signup = (name, email, password) => {
        // Simulate creating a new user
        console.log("Attempting signup for:", name, email);
        
        // In a real app, you'd check if the user already exists.
        // For this demo, we'll just store the new user in localStorage.
        const newUser = { name, email, password };
        localStorage.setItem(`user_${email}`, JSON.stringify(newUser));
        
        // For a better user experience, log them in immediately after signup
        setUser(newUser);
        localStorage.setItem('craftconnect_user', JSON.stringify(newUser));
        console.log("Signup successful and user logged in.");
    };

    const logout = () => {
        console.log("Logging out.");
        setUser(null);
        // Remove the user session from localStorage
        localStorage.removeItem('craftconnect_user');
    };

    // The value provided to consuming components
    const value = {
        isAuthenticated: !!user, // True if user object exists, false otherwise
        user,
        login,
        signup,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};