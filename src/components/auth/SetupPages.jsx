import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Store, MapPin } from 'lucide-react';

export const BusinessSetupPage = () => {
    const { setCurrentPage, setIsAuthenticated, appName, theme } = useAuth();
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className={`${theme.card} backdrop-blur-xl rounded-3xl p-8 max-w-2xl w-full border border-slate-700/50 shadow-2xl`}>
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mb-4">
                        <Store size={40} className="text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Tell Us About Your Business</h1>
                    <p className="text-slate-400">This helps {appName} tailor the app to your needs</p>
                </div>
                <div className="space-y-6">
                    <div>
                        <label className="block text-white font-medium mb-2">Business Name</label>
                        <input type="text" className={`w-full px-4 py-3 rounded-xl ${theme.input} border text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition`} />
                    </div>
                    <div>
                        <label className="block text-white font-medium mb-2">Business Type</label>
                        <select className={`w-full px-4 py-3 rounded-xl ${theme.input} border text-white focus:outline-none focus:border-purple-500 transition`}>
                            <option>Select business type</option>
                            <option>Retail Store</option>
                            <option>Restaurant</option>
                            <option>Service Business</option>
                            <option>E-commerce</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-white font-medium mb-2">Primary Operating Location</label>
                        <input type="text" placeholder="Enter location or choose on map" className={`w-full px-4 py-3 rounded-xl ${theme.input} border text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition`} />
                        <button className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 flex items-center gap-1">
                            <MapPin size={16} />
                            Choose on map
                        </button>
                    </div>
                    <button onClick={() => setCurrentPage('setup-complete')} className={`w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold shadow-lg transition-all`}>
                        Continue
                    </button>
                    <button onClick={() => { setIsAuthenticated(true); setCurrentPage('dashboard'); }} className="w-full text-cyan-400 hover:text-cyan-300 text-sm">
                        Skip for now
                    </button>
                </div>
            </div>
        </div>
    );
};

export const SetupCompletePage = () => {
    const { setIsAuthenticated, setCurrentPage, theme } = useAuth();
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex items-center justify-center p-4">
            <div className={`${theme.card} backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-slate-700/50 shadow-2xl text-center`}>
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">Setup Complete!</h1>
                <p className="text-slate-400 mb-8">Your business profile has been created successfully</p>
                <div className={`${theme.input} rounded-xl p-6 mb-6 text-left space-y-3`}>
                    <div className="flex justify-between">
                        <span className="text-slate-400">Business:</span>
                        <span className="text-white font-medium">My Store</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">Type:</span>
                        <span className="text-white font-medium">Retail Store</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">Location:</span>
                        <span className="text-white font-medium">Bangalore</span>
                    </div>
                </div>
                <button onClick={() => { setIsAuthenticated(true); setCurrentPage('dashboard'); }} className={`w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold shadow-lg transition-all`}>
                    Get Started
                </button>
            </div>
        </div>
    );
};