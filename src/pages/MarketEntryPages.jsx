import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthenticatedLayout } from '../components/core/AuthenticatedLayout';

import {
    Search,
    MapPin,
    Store,
    Route,
    ThermometerSun,
    Brain,
    TrendingUp
} from 'lucide-react';

const InfoCard = ({ title, value, icon: Icon, color }) => {
    const { theme } = useAuth();

    return (
        <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50`}>
            <div className="flex items-center justify-between">

                <div>
                    <p className="text-slate-400 text-sm">
                        {title}
                    </p>

                    <h3 className={`text-3xl font-bold ${color}`}>
                        {value}
                    </h3>
                </div>

                <Icon className={color} size={28} />
            </div>
        </div>
    );
};

export const MarketEntryPage = () => {

    const { theme } = useAuth();

    const [location, setLocation] = useState('');

    const [analysis] = useState({
        totalShops: 428,
        demandScore: 88,
        competition: 'Medium',
        transportScore: 91,
        climateScore: 85
    });

    const handleAnalyze = async () => {

        /*
        Future Backend Call

        const response = await fetch(
          "http://localhost:3000/api/analyze",
          {
             method:"POST",
             headers:{
               "Content-Type":"application/json"
             },
             body:JSON.stringify({location})
          }
        );

        const data = await response.json();
        */

        console.log("Analyze:", location);
    };

    return (
        <AuthenticatedLayout>

            <div className="border-b border-slate-800 pb-6">

                <h1 className="text-4xl font-bold text-white">
                    Location Intelligence Dashboard
                </h1>

                <p className="text-slate-400 mt-2">
                    AI-powered location analysis and business recommendations.
                </p>

            </div>

            {/* Search */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <h2 className="text-2xl font-bold text-white mb-4">

                    Analyze New Location

                </h2>

                <div className="flex gap-4">

                    <div className={`flex-1 ${theme.input} border rounded-xl px-4 py-3 flex items-center gap-3`}>

                        <MapPin className="text-cyan-400" />

                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter location..."
                            className="bg-transparent text-white outline-none w-full"
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

            {/* KPI Cards */}

            <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">

                <InfoCard
                    title="Shops Detected"
                    value={analysis.totalShops}
                    icon={Store}
                    color="text-cyan-400"
                />

                <InfoCard
                    title="Demand Score"
                    value={`${analysis.demandScore}/100`}
                    icon={TrendingUp}
                    color="text-emerald-400"
                />

                <InfoCard
                    title="Competition"
                    value={analysis.competition}
                    icon={Store}
                    color="text-yellow-400"
                />

                <InfoCard
                    title="Transport"
                    value={`${analysis.transportScore}/100`}
                    icon={Route}
                    color="text-purple-400"
                />

                <InfoCard
                    title="Climate"
                    value={`${analysis.climateScore}/100`}
                    icon={ThermometerSun}
                    color="text-orange-400"
                />

            </div>

            {/* Map Section */}

            <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50`}>

                <h2 className="text-2xl font-bold text-white mb-4">

                    Location Map

                </h2>

                <div className="aspect-video rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">

                    <div className="text-center">

                        <MapPin
                            className="mx-auto text-cyan-400 mb-3"
                            size={60}
                        />

                        <p className="text-white font-medium">
                            Interactive Map (Google Maps / Leaflet)
                        </p>

                    </div>

                </div>

            </div>

            {/* Shop Categories */}

            <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50`}>

                <h2 className="text-2xl font-bold text-white mb-6">

                    Shop Category Analysis

                </h2>

                <div className="grid md:grid-cols-3 gap-4">

                    {[
                        ["Restaurants", 82],
                        ["Medical Stores", 14],
                        ["Grocery Stores", 25],
                        ["Clothing Shops", 32],
                        ["Electronics", 18],
                        ["Pet Stores", 3]
                    ].map((item) => (

                        <div
                            key={item[0]}
                            className="bg-slate-800 p-4 rounded-xl"
                        >

                            <p className="text-slate-400">
                                {item[0]}
                            </p>

                            <h3 className="text-3xl font-bold text-white">
                                {item[1]}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>

            {/* Transportation */}

            <div className="grid md:grid-cols-2 gap-6">

                <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50`}>

                    <h2 className="text-xl font-bold text-white mb-4">
                        Transportation Analysis
                    </h2>

                    <div className="space-y-3">

                        <p className="text-slate-300">
                            🚇 Metro Stations: 2
                        </p>

                        <p className="text-slate-300">
                            🚌 Bus Stops: 14
                        </p>

                        <p className="text-slate-300">
                            🚗 Parking Availability: High
                        </p>

                        <p className="text-slate-300">
                            🚦 Traffic Density: Medium
                        </p>

                    </div>

                </div>

                <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50`}>

                    <h2 className="text-xl font-bold text-white mb-4">
                        Climate Analysis
                    </h2>

                    <div className="space-y-3">

                        <p className="text-slate-300">
                            🌡 Temperature: 29°C
                        </p>

                        <p className="text-slate-300">
                            💧 Humidity: 68%
                        </p>

                        <p className="text-slate-300">
                            🌧 Rainfall: Moderate
                        </p>

                        <p className="text-slate-300">
                            ☀ Business Suitability: Excellent
                        </p>

                    </div>

                </div>

            </div>

            {/* AI Recommendations */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-4">

                    <Brain
                        className="text-cyan-400"
                        size={32}
                    />

                    <h2 className="text-3xl font-bold text-white">
                        AI Business Recommendations
                    </h2>

                </div>

                <div className="space-y-4">

                    <div className="bg-emerald-500/10 border border-emerald-500 rounded-xl p-4">

                        <h3 className="text-xl font-bold text-emerald-400">
                            #1 Pet Store
                        </h3>

                        <p className="text-slate-300 mt-2">
                            Very low competition and strong residential demand.
                        </p>

                    </div>

                    <div className="bg-cyan-500/10 border border-cyan-500 rounded-xl p-4">

                        <h3 className="text-xl font-bold text-cyan-400">
                            #2 Organic Grocery
                        </h3>

                        <p className="text-slate-300 mt-2">
                            Growing demand among premium customers.
                        </p>

                    </div>

                    <div className="bg-purple-500/10 border border-purple-500 rounded-xl p-4">

                        <h3 className="text-xl font-bold text-purple-400">
                            #3 EV Charging Station
                        </h3>

                        <p className="text-slate-300 mt-2">
                            Increasing EV adoption and excellent road access.
                        </p>

                    </div>

                </div>

            </div>

        </AuthenticatedLayout>
    );
};