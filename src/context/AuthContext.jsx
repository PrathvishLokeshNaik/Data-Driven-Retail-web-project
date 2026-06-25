import React, { useState, useContext, createContext } from 'react';
import { theme } from '../theme';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const value = {
        isAuthenticated,
        setIsAuthenticated,

        isLoading,
        setIsLoading,

        showMenu,
        setShowMenu,

        theme,

        appName: "Vyaapaar IQ"
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);