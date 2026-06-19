import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { ChevronRight } from 'lucide-react';

export const QuickAccessTile = ({ page, icon: Icon, label, subtitle }) => {
    const { setCurrentPage, theme } = useAuth();
    return (
        <div 
            onClick={() => setCurrentPage(page)} 
            className={`${theme.card} ${theme.cardHover} rounded-2xl p-6 border border-slate-700/50 cursor-pointer transition-all flex items-center gap-4 shadow-md`}
        >
            <Icon className="text-cyan-400" size={40} />
            <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{label}</h3>
                <p className="text-slate-400 text-sm">{subtitle}</p>
            </div>
            <ChevronRight className="text-slate-600" />
        </div>
    );
};