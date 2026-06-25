import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthenticatedLayout } from '../components/core/AuthenticatedLayout';

import {
    User,
    MapPin,
    IndianRupee,
    Brain,
    Bookmark,
    Crown,
    Building2
} from 'lucide-react';

const SectionCard = ({ title, icon: Icon, children }) => {
    const { theme } = useAuth();

    return (
        <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>
            <div className="flex items-center gap-3 mb-6">
                <Icon
                    size={26}
                    className="text-cyan-400"
                />

                <h2 className="text-2xl font-bold text-white">
                    {title}
                </h2>
            </div>

            {children}
        </div>
    );
};

export const ProfilePage = () => {

    const { theme } = useAuth();

    return (
        <AuthenticatedLayout>

            {/* Header */}

            <div className="border-b border-slate-800 pb-6">

                <h1 className="text-4xl font-bold text-white">
                    User Profile
                </h1>

                <p className="text-slate-400 mt-2">
                    Configure your business intelligence preferences.
                </p>

            </div>

            {/* User Info */}

            <SectionCard
                title="User Information"
                icon={User}
            >

                <div className="grid md:grid-cols-2 gap-4">

                    <div>
                        <label className="text-slate-400">
                            Full Name
                        </label>

                        <input
                            value="Prathvish Naik"
                            readOnly
                            className={`${theme.input} w-full mt-2 p-3 rounded-xl`}
                        />
                    </div>

                    <div>
                        <label className="text-slate-400">
                            Email
                        </label>

                        <input
                            value="user@example.com"
                            readOnly
                            className={`${theme.input} w-full mt-2 p-3 rounded-xl`}
                        />
                    </div>

                </div>

            </SectionCard>

            {/* Business Preferences */}

            <SectionCard
                title="Business Preferences"
                icon={Building2}
            >

                <div className="grid md:grid-cols-2 gap-4">

                    <select className={`${theme.input} p-3 rounded-xl`}>
                        <option>Retail</option>
                        <option>Food & Beverage</option>
                        <option>Healthcare</option>
                        <option>Technology</option>
                        <option>Services</option>
                    </select>

                    <select className={`${theme.input} p-3 rounded-xl`}>
                        <option>Low Competition Focus</option>
                        <option>High Profit Focus</option>
                        <option>Fast Growth Focus</option>
                    </select>

                </div>

            </SectionCard>

            {/* Investment Profile */}

            <SectionCard
                title="Investment Profile"
                icon={IndianRupee}
            >

                <div className="grid md:grid-cols-4 gap-4">

                    <button className="bg-slate-800 p-4 rounded-xl">
                        ₹5L
                    </button>

                    <button className="bg-slate-800 p-4 rounded-xl">
                        ₹10L
                    </button>

                    <button className="bg-slate-800 p-4 rounded-xl">
                        ₹20L
                    </button>

                    <button className="bg-slate-800 p-4 rounded-xl">
                        ₹50L+
                    </button>

                </div>

            </SectionCard>

            {/* Target Locations */}

            <SectionCard
                title="Target Locations"
                icon={MapPin}
            >

                <div className="grid md:grid-cols-3 gap-4">

                    {[
                        "Bengaluru",
                        "Mysuru",
                        "Mangaluru",
                        "Hubli",
                        "Udupi",
                        "Belagavi"
                    ].map(city => (

                        <div
                            key={city}
                            className="bg-slate-800 rounded-xl p-4"
                        >
                            {city}
                        </div>

                    ))}

                </div>

            </SectionCard>

            {/* Saved Analyses */}

            <SectionCard
                title="Saved Analyses"
                icon={Bookmark}
            >

                <div className="space-y-4">

                    <div className="bg-slate-800 rounded-xl p-4">
                        Whitefield Analysis
                    </div>

                    <div className="bg-slate-800 rounded-xl p-4">
                        Electronic City Analysis
                    </div>

                    <div className="bg-slate-800 rounded-xl p-4">
                        Mysuru Market Study
                    </div>

                </div>

            </SectionCard>

            {/* AI Settings */}

            <SectionCard
                title="AI Configuration"
                icon={Brain}
            >

                <div className="space-y-4">

                    <div className="flex justify-between">

                        <span>
                            Demand Forecasting
                        </span>

                        <input type="checkbox" defaultChecked />
                    </div>

                    <div className="flex justify-between">

                        <span>
                            Competition Analysis
                        </span>

                        <input type="checkbox" defaultChecked />
                    </div>

                    <div className="flex justify-between">

                        <span>
                            Climate Intelligence
                        </span>

                        <input type="checkbox" defaultChecked />
                    </div>

                    <div className="flex justify-between">

                        <span>
                            Transportation Analysis
                        </span>

                        <input type="checkbox" defaultChecked />
                    </div>

                </div>

            </SectionCard>

            {/* Subscription */}

            <SectionCard
                title="Subscription Plan"
                icon={Crown}
            >

                <div className="bg-cyan-500/10 border border-cyan-500 rounded-xl p-6">

                    <h3 className="text-2xl font-bold text-cyan-400">
                        Professional Plan
                    </h3>

                    <p className="text-slate-300 mt-2">
                        Unlimited location analysis,
                        AI recommendations,
                        transportation intelligence,
                        climate analysis,
                        and ROI forecasting.
                    </p>

                </div>

            </SectionCard>

        </AuthenticatedLayout>
    );
};