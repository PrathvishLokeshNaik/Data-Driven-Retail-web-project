import React from 'react';
import { Navigation } from './Navigation';


export const AuthenticatedLayout = ({ children }) => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        <Navigation />
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            {children}
        </div>
    </div>
);