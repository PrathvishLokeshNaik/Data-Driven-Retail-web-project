import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthenticatedLayout } from '../components/core/AuthenticatedLayout';
import { User, LogOut, Store, MapPin } from 'lucide-react';

export const ProfilePage = () => {
    const { setIsAuthenticated, setCurrentPage, theme } = useAuth();
    return (
        <AuthenticatedLayout>
            <h1 className="text-4xl font-bold text-white mb-8">Profile & Settings</h1>
            
            <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50 shadow-xl`}>
                <h2 className="text-2xl font-bold text-white mb-4">Account Details</h2>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                        <User className="text-white" size={32} />
                    </div>
                    <div>
                        <p className="text-xl font-bold text-white">John Doe</p>
                        <p className="text-slate-400">john.doe@vaapyaariq.com</p>
                    </div>
                </div>
                <button className={`w-full py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-medium transition`}>
                    Edit Profile
                </button>
            </div>
            
            <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50 shadow-xl`}>
                <h2 className="text-2xl font-bold text-white mb-4">Store Management</h2>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white">
                        <Store className="text-cyan-400" size={20} />
                        <span>Sundai's General Store (Primary)</span>
                    </div>
                    <div className="space-y-2 ml-8 text-slate-400">
                        <p className="flex items-center gap-2">
                            <MapPin size={16} />
                            Jayanagar 4th Block, Bengaluru
                        </p>
                    </div>
                </div>
                <button className={`w-full py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-medium transition mt-4`}>
                    Add New Store
                </button>
            </div>
            
            <button onClick={() => { setIsAuthenticated(false); setCurrentPage('signin'); }} className={`w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold flex items-center justify-center gap-3 transition-all shadow-lg`}>
                <LogOut size={24} />
                Logout
            </button>
        </AuthenticatedLayout>
    );
};