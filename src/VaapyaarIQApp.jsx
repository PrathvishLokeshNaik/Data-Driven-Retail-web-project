import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { PageRouter } from './PageRouter';

const VaapyaarIQApp = () => (
    <AuthProvider>
        <PageRouter />
    </AuthProvider>
);

export default VaapyaarIQApp;