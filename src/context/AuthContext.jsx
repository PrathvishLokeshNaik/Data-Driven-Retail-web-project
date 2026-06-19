import React, { useState, useContext, createContext } from 'react';
import { theme } from '../theme';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('signin');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const value = {
        currentPage, setCurrentPage,
        isAuthenticated, setIsAuthenticated,
        /* showMenu, setShowMenu, */
        theme, 
        appName: "Vyaapaar IQ"
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


export const useAuth = () => useContext(AuthContext);
