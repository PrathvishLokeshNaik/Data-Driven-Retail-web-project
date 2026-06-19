import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthenticatedLayout } from '../components/core/AuthenticatedLayout';
import { MapPin } from 'lucide-react';

const StatBox = ({ title, value, color }) => {
    const { theme } = useAuth();
    return (
        <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50`}>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className={`${color} text-lg font-medium`}>{value}</p>
        </div>
    );
};

export const MarketEntryPage = () => {
    const { setCurrentPage, theme } = useAuth();
    return (
        <AuthenticatedLayout>
            <h1 className="text-4xl font-bold text-white">Market Entry Strategy</h1>
            <p className="text-slate-400 text-lg">Identify and analyze high-potential business zones.</p>
            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50 shadow-xl`}>
                <h2 className="text-2xl font-bold text-white mb-6">Explore a Suggested Location</h2>
                <div className="aspect-video bg-slate-800/50 rounded-xl flex items-center justify-center mb-6 border border-slate-700">
                    <div className="text-center">
                        <MapPin className="text-cyan-400 mx-auto mb-4" size={64} />
                        <h3 className="text-2xl font-bold text-white">Market Opportunity Map</h3>
                    </div>
                </div>
                <div className={`${theme.input} rounded-xl p-6 mb-6`}>
                    <h3 className="text-xl font-bold text-white mb-2">Suggested Business: Electronics Repair</h3>
                    <p className="text-slate-400">Based on local demand and low competitor density.</p>
                </div>
                <button onClick={() => setCurrentPage('location-details')} className={`w-full py-3 rounded-xl ${theme.button} text-white font-semibold shadow-lg`}>
                    View Full Market Report
                </button>
            </div>
        </AuthenticatedLayout>
    );
};

export const LocationDetailsPage = () => {
    const { setCurrentPage, theme } = useAuth();
    return (
        <AuthenticatedLayout>
            <h1 className="text-4xl font-bold text-white">Market Analysis: Jayanagar</h1>
            <div className="grid md:grid-cols-2 gap-6">
                <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50`}>
                    <h3 className="text-2xl font-bold text-white mb-4">Location Snapshot</h3>
                    <p className="text-cyan-400 mb-4 font-semibold">Jayanagar 4th Block, Bengaluru</p>
                    <div className="aspect-video bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700">
                        <div className="text-center">
                            <MapPin className="text-cyan-400 mx-auto mb-2" size={48} />
                            <p className="text-white font-medium">Interactive Map View</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <StatBox title="Market Saturation" value="Low" color="text-emerald-400" />
                    <StatBox title="Potential Demand Score" value="9.2/10 (High)" color="text-blue-400" />
                    <StatBox title="Avg. Rental Cost" value="₹32,000/month" color="text-yellow-400" />
                </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mt-4">Available Properties</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {[
                    { name: 'Shop #123 (Premium)', size: '300 sq. ft. commercial space', rent: '₹25,000/month' },
                    { name: 'Retail Unit A (Corner)', size: '550 sq. ft. corner location', rent: '₹40,000/month' }
                ].map((property, idx) => (
                    <div key={idx} className={`${theme.card} rounded-2xl p-6 border border-slate-700/50`}>
                        <h3 className="text-2xl font-bold text-white mb-3">{property.name}</h3>
                        <p className="text-slate-400 mb-2">{property.size}</p>
                        <p className="text-cyan-400 font-medium mb-4">{property.rent}</p>
                        <button className={`w-full py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition`}>
                            Contact Owner
                        </button>
                    </div>
                ))}
            </div>
            <button onClick={() => setCurrentPage('pick-location')} className={`w-full py-4 rounded-xl ${theme.button} text-white font-semibold text-lg mt-4 shadow-lg`}>
                Select this as a Potential Location
            </button>
        </AuthenticatedLayout>
    );
};

export const PickLocationPage = () => {
    const { setCurrentPage, theme } = useAuth();
    return (
        <AuthenticatedLayout>
            <h1 className="text-4xl font-bold text-white">Confirm Location Selection</h1>
            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50 shadow-xl`}>
                <h2 className="text-2xl font-bold text-white mb-6">Your Primary Store Location</h2>
                <div className="aspect-video bg-slate-800/50 rounded-xl flex items-center justify-center mb-6 border border-slate-700">
                    <div className="text-center">
                        <MapPin className="text-cyan-400 mx-auto mb-4" size={64} />
                        <h3 className="text-2xl font-bold text-white">Map View Confirmed</h3>
                    </div>
                </div>
                <div className={`${theme.input} rounded-xl p-6 mb-6`}>
                    <h3 className="text-xl font-bold text-white mb-2">Saavira Kambada Basadi (Thousand Pillar Temple)</h3>
                    <p className="text-slate-400">Main Road, Moodabidri</p>
                    <p className="text-slate-400">Dakshina Kannada District – 574227</p>
                    <p className="text-slate-400">Karnataka, India</p>
                </div>
                <button onClick={() => setCurrentPage('dashboard')} className={`w-full py-3 rounded-xl ${theme.button} text-white font-semibold shadow-lg`}>
                    Set as Primary Location and Continue
                </button>
            </div>
        </AuthenticatedLayout>
    );
};