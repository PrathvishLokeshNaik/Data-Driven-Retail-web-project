import React from 'react';
import { useAuth } from '../../context/AuthContext';

export const StatCard = ({ title, value, trend, color, icon: Icon, onClick }) => {
    const { theme } = useAuth();

    return (
        <div 
            onClick={onClick}
            className={`${theme.card} ${theme.cardHover} rounded-2xl p-6 border border-slate-700/50 transition-all cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01]`}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-400 text-lg font-medium">{title}</h3>
                <Icon className={color} size={32} />
            </div>
            <p className="text-4xl font-extrabold text-white">{value}</p>
            <p className={`${color} text-sm mt-2`}>{trend}</p>
        </div>
    );
};