import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
    Home, Package, MapPin, LineChart, DollarSign, User, Bell, BarChart3, Menu, X 
} from 'lucide-react';

const NavItem = ({ page, icon: Icon, label }) => {
    const { setCurrentPage } = useAuth();
    return (
        <button 
            onClick={() => setCurrentPage(page)} 
            className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition font-medium"
        >
            <Icon size={20} />
            {label}
        </button>
    );
};

export const Navigation = () => {
    const { setCurrentPage, appName, setShowMenu, showMenu, theme } = useAuth();
    
    return (
        <nav className={`${theme.card} backdrop-blur-lg border-b border-slate-700/50 sticky top-0 z-50 shadow-xl`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <BarChart3 className="text-cyan-400 transform rotate-45" size={32} />
                    <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
                        {appName}
                    </h1>
                </div>
                            
                <div className="hidden md:flex gap-8">
                    <NavItem page='dashboard' icon={Home} label='Dashboard' />
                    <NavItem page='inventory' icon={Package} label='Inventory' />
                    <NavItem page='market-entry' icon={MapPin} label='Market Entry' />
                    <NavItem page='analytics' icon={LineChart} label='Analytics' />
                    <NavItem page='transactions' icon={DollarSign} label='Finance' />
                </div>
                
                <div className="flex items-center gap-4">
                    <Bell className="text-slate-400 hover:text-cyan-400 cursor-pointer transition" size={22} />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center cursor-pointer shadow-lg" onClick={() => setCurrentPage('profile')}>
                        <User size={20} className="text-white" />
                    </div>
                    <button onClick={() => setShowMenu(!showMenu)} className="md:hidden text-white">
                        {showMenu ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            
            {showMenu && (
                <div className="md:hidden border-t border-slate-700/50 p-4 space-y-3">
                    <button onClick={() => { setCurrentPage('dashboard'); setShowMenu(false); }} className="block w-full text-left py-2 text-slate-300 hover:text-cyan-400">Dashboard</button>
                    <button onClick={() => { setCurrentPage('inventory'); setShowMenu(false); }} className="block w-full text-left py-2 text-slate-300 hover:text-cyan-400">Inventory</button>
                    <button onClick={() => { setCurrentPage('market-entry'); setShowMenu(false); }} className="block w-full text-left py-2 text-slate-300 hover:text-cyan-400">Market Entry</button>
                    <button onClick={() => { setCurrentPage('analytics'); setShowMenu(false); }} className="block w-full text-left py-2 text-slate-300 hover:text-cyan-400">Analytics</button>
                    <button onClick={() => { setCurrentPage('transactions'); setShowMenu(false); }} className="block w-full text-left py-2 text-slate-300 hover:text-cyan-400">Finance</button>
                </div>
            )}
        </nav>
    );
};