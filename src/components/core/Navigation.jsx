import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import {
    Home,
    MapPin,
    LineChart,
    DollarSign,
    User,
    Bell,
    BarChart3,
    TrendingUp,
    Menu,
    X
} from 'lucide-react';

const NavItem = ({ path, icon: Icon, label }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(path)}
            className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition font-medium"
        >
            <Icon size={20} />
            {label}
        </button>
    );
};

export const Navigation = () => {
    const navigate = useNavigate();

    const {
        appName,
        showMenu,
        setShowMenu,
        theme
    } = useAuth();

    return (
        <nav className={`${theme.card} backdrop-blur-lg border-b border-slate-700/50 sticky top-0 z-50 shadow-xl`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                <div className="flex items-center gap-2">
                    <BarChart3
                        className="text-cyan-400 rotate-45"
                        size={32}
                    />

                    <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        {appName}
                    </h1>
                </div>

                <div className="hidden md:flex gap-8">
                    <NavItem path="/dashboard" icon={Home} label="Dashboard" />
                    <NavItem path="/market-entry" icon={MapPin} label="Market Entry" />
                    <NavItem path="/competition" icon={TrendingUp} label="Competition" />
                    <NavItem path="/analytics" icon={LineChart} label="Analytics" />
                    <NavItem path="/business-feasibility" icon={DollarSign} label="Finance" />
                </div>

                <div className="flex items-center gap-4">

                    <Bell
                        className="text-slate-400 hover:text-cyan-400 cursor-pointer"
                        size={22}
                    />

                    <div
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center cursor-pointer"
                        onClick={() => navigate('/profile')}
                    >
                        <User size={20} className="text-white" />
                    </div>

                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="md:hidden text-white"
                    >
                        {showMenu ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>
            </div>

            {showMenu && (
                <div className="md:hidden border-t border-slate-700/50 p-4 space-y-3 bg-slate-900 text-white">

                    <button
                        onClick={() => {
                            navigate('/dashboard');
                            setShowMenu(false);
                        }}
                        className="block w-full text-left py-2"
                    >
                        Dashboard
                    </button>

                    <button
                        onClick={() => {
                            navigate('/market-entry');
                            setShowMenu(false);
                        }}
                        className="block w-full text-left py-2"
                    >
                        Market Entry
                    </button>

                    <button
                        onClick={() => {
                            navigate('/competition');
                            setShowMenu(false);
                        }}
                        className="block w-full text-left py-2"
                    >
                        Competition
                    </button>

                    <button
                        onClick={() => {
                            navigate('/analytics');
                            setShowMenu(false);
                        }}
                        className="block w-full text-left py-2"
                    >
                        Analytics
                    </button>

                    <button
                        onClick={() => {
                            navigate('/business-feasibility');
                            setShowMenu(false);
                        }}
                        className="block w-full text-left py-2"
                    >
                        Finance
                    </button>

                </div>
            )}
        </nav>
    );
};