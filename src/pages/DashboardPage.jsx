import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthenticatedLayout } from '../components/core/AuthenticatedLayout';
import {
    Search,
    MapPin,
    Store,
    Brain,
    TrendingUp,
    Building2,
    Route,
    ThermometerSun
} from 'lucide-react';

const MetricCard = ({ title, value, subtitle, icon: Icon, color }) => {
    const { theme } = useAuth();

    return (
        <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50 shadow-xl`}>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-slate-400">{title}</p>
                    <h2 className={`text-4xl font-bold ${color}`}>
                        {value}
                    </h2>
                    <p className="text-slate-500 mt-2">{subtitle}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-800">
                    <Icon className={color} size={30} />
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({
    title,
    description,
    icon: Icon,
    color,
    onClick
}) => {
    const { theme } = useAuth();

    return (
        <div
            onClick={onClick}
            className={`${theme.card} rounded-2xl p-6 border border-slate-700/50 cursor-pointer hover:scale-[1.02] transition-all`}
        >
            <div className="flex items-center gap-4 mb-4">
                <Icon className={color} size={30} />
                <h3 className="text-xl font-bold text-white">
                    {title}
                </h3>
            </div>

            <p className="text-slate-400">
                {description}
            </p>
        </div>
    );
};

export const DashboardPage = () => {
    const { theme, setCurrentPage } = useAuth();

    const [location, setLocation] = useState('');

    const handleAnalyze = () => {
        if (!location) return;

        setCurrentPage('market-entry');
    };

    return (
        <AuthenticatedLayout>

            {/* Header */}

            <div className="border-b border-slate-800 pb-6">
                <h1 className="text-4xl font-bold text-white">
                    VaapyaarIQ AI
                </h1>

                <p className="text-slate-400 mt-2">
                    AI-Powered Business Location Intelligence Platform
                </p>
            </div>

            {/* Search Section */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50 shadow-xl`}>

                <h2 className="text-2xl font-bold text-white mb-4">
                    Analyze a New Location
                </h2>

                <div className="flex gap-4">

                    <div className={`flex-1 ${theme.input} border rounded-xl px-4 py-3 flex items-center gap-3`}>
                        <MapPin className="text-cyan-400" />

                        <input
                            type="text"
                            placeholder="Enter Location (e.g. Whitefield, Bengaluru)"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="bg-transparent outline-none text-white w-full"
                        />
                    </div>

                    <button
                        onClick={handleAnalyze}
                        className={`${theme.button} px-8 rounded-xl text-white font-semibold flex items-center gap-2`}
                    >
                        <Search size={18} />
                        Analyze
                    </button>

                </div>
            </div>

            {/* KPI Section */}

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

                <MetricCard
                    title="Locations Analyzed"
                    value="128"
                    subtitle="Across Karnataka"
                    icon={MapPin}
                    color="text-cyan-400"
                />

                <MetricCard
                    title="Shops Identified"
                    value="8,245"
                    subtitle="Mapped & Categorized"
                    icon={Store}
                    color="text-purple-400"
                />

                <MetricCard
                    title="Business Opportunities"
                    value="317"
                    subtitle="Low Competition"
                    icon={TrendingUp}
                    color="text-emerald-400"
                />

                <MetricCard
                    title="AI Confidence"
                    value="92%"
                    subtitle="Prediction Accuracy"
                    icon={Brain}
                    color="text-yellow-400"
                />
            </div>

            {/* Modules */}

            <div>

                <h2 className="text-3xl font-bold text-white mb-6">
                    Intelligence Modules
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <FeatureCard
                        title="Location Analysis"
                        description="Analyze nearby shops, competition, demographics and demand."
                        icon={Building2}
                        color="text-cyan-400"
                        onClick={() => setCurrentPage('market-entry')}
                    />

                    <FeatureCard
                        title="Competition Intelligence"
                        description="Identify saturated and underserved business categories."
                        icon={Store}
                        color="text-red-400"
                        onClick={() => setCurrentPage('competition')}
                    />

                    <FeatureCard
                        title="Transportation Analysis"
                        description="Analyze roads, bus routes, metro stations and accessibility."
                        icon={Route}
                        color="text-green-400"
                    />

                    <FeatureCard
                        title="Climate Intelligence"
                        description="Evaluate weather suitability for business types."
                        icon={ThermometerSun}
                        color="text-yellow-400"
                    />

                </div>

            </div>

            {/* AI Summary */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50 shadow-xl`}>

                <h2 className="text-2xl font-bold text-white mb-4">
                    AI Recommendation Snapshot
                </h2>

                <div className="space-y-3 text-slate-300">

                    <p>
                        📍 <span className="font-semibold text-white">Whitefield</span>
                    </p>

                    <p>
                        • Competition: Medium
                    </p>

                    <p>
                        • Demand Score: 88/100
                    </p>

                    <p>
                        • Transportation Score: 91/100
                    </p>

                    <p>
                        • Climate Suitability: Excellent
                    </p>

                    <p className="text-emerald-400 font-semibold text-lg">
                        Recommended Business:
                        Pet Store & Organic Grocery
                    </p>

                </div>

            </div>

        </AuthenticatedLayout>
    );
};