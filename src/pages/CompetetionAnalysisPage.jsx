import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthenticatedLayout } from '../components/core/AuthenticatedLayout';

import {
    Store,
    Target,
    Brain,
    TrendingUp,
    AlertTriangle,
    CheckCircle
} from 'lucide-react';

const MetricCard = ({
    title,
    value,
    color
}) => {
    const { theme } = useAuth();

    return (
        <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50`}>

            <p className="text-slate-400">
                {title}
            </p>

            <h2 className={`text-4xl font-bold mt-2 ${color}`}>
                {value}
            </h2>

        </div>
    );
};

const CategoryRow = ({
    category,
    count,
    competition,
    color
}) => {
    return (
        <tr className="border-b border-slate-700">

            <td className="py-4 text-white">
                {category}
            </td>

            <td className="py-4 text-white">
                {count}
            </td>

            <td className={`py-4 font-semibold ${color}`}>
                {competition}
            </td>

        </tr>
    );
};

export const CompetetionAnalysisPage = () => {

    const { theme } = useAuth();

    return (
        <AuthenticatedLayout>

            {/* Header */}

            <div className="border-b border-slate-800 pb-6">

                <h1 className="text-4xl font-bold text-white">
                    Competition Intelligence
                </h1>

                <p className="text-slate-400 mt-2">
                    Analyze market saturation and identify
                    underserved business opportunities.
                </p>

            </div>

            {/* KPI Cards */}

            <div className="grid lg:grid-cols-3 gap-6">

                <MetricCard
                    title="Competition Score"
                    value="62/100"
                    color="text-yellow-400"
                />

                <MetricCard
                    title="Market Gap Score"
                    value="91/100"
                    color="text-emerald-400"
                />

                <MetricCard
                    title="Opportunity Index"
                    value="88/100"
                    color="text-cyan-400"
                />

            </div>

            {/* Competition Table */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-6">

                    <Store
                        className="text-cyan-400"
                        size={28}
                    />

                    <h2 className="text-2xl font-bold text-white">
                        Category Competition Analysis
                    </h2>

                </div>

                <table className="w-full">

                    <thead>

                        <tr className="border-b border-slate-700">

                            <th className="text-left py-3 text-slate-400">
                                Category
                            </th>

                            <th className="text-left py-3 text-slate-400">
                                Shops
                            </th>

                            <th className="text-left py-3 text-slate-400">
                                Competition
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        <CategoryRow
                            category="Restaurants"
                            count="82"
                            competition="High"
                            color="text-red-400"
                        />

                        <CategoryRow
                            category="Clothing"
                            count="32"
                            competition="High"
                            color="text-red-400"
                        />

                        <CategoryRow
                            category="Medical"
                            count="14"
                            competition="Medium"
                            color="text-yellow-400"
                        />

                        <CategoryRow
                            category="Grocery"
                            count="25"
                            competition="Medium"
                            color="text-yellow-400"
                        />

                        <CategoryRow
                            category="Pet Store"
                            count="3"
                            competition="Low"
                            color="text-emerald-400"
                        />

                        <CategoryRow
                            category="Electronics"
                            count="18"
                            competition="Low"
                            color="text-emerald-400"
                        />

                    </tbody>

                </table>

            </div>

            {/* Market Gap Detection */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-6">

                    <Target
                        className="text-emerald-400"
                        size={28}
                    />

                    <h2 className="text-2xl font-bold text-white">
                        Market Gap Detection
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 gap-4">

                    {[
                        "Pet Store",
                        "Organic Grocery",
                        "EV Charging Station",
                        "Gaming Lounge"
                    ].map((item) => (

                        <div
                            key={item}
                            className="bg-emerald-500/10 border border-emerald-500 rounded-xl p-4"
                        >

                            <div className="flex items-center gap-3">

                                <CheckCircle
                                    className="text-emerald-400"
                                    size={20}
                                />

                                <h3 className="text-lg font-bold text-white">
                                    {item}
                                </h3>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* Opportunity Ranking */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-6">

                    <TrendingUp
                        className="text-cyan-400"
                        size={28}
                    />

                    <h2 className="text-2xl font-bold text-white">
                        Opportunity Ranking
                    </h2>

                </div>

                <div className="space-y-4">

                    <div className="bg-emerald-500/10 border border-emerald-500 rounded-xl p-4">

                        <h3 className="text-xl font-bold text-emerald-400">
                            Rank #1 - Pet Store
                        </h3>

                        <p className="text-slate-300 mt-2">
                            High demand and very low competition.
                        </p>

                    </div>

                    <div className="bg-cyan-500/10 border border-cyan-500 rounded-xl p-4">

                        <h3 className="text-xl font-bold text-cyan-400">
                            Rank #2 - Organic Grocery
                        </h3>

                        <p className="text-slate-300 mt-2">
                            Strong growth among health-conscious customers.
                        </p>

                    </div>

                    <div className="bg-purple-500/10 border border-purple-500 rounded-xl p-4">

                        <h3 className="text-xl font-bold text-purple-400">
                            Rank #3 - EV Charging Station
                        </h3>

                        <p className="text-slate-300 mt-2">
                            Excellent road connectivity and rising EV adoption.
                        </p>

                    </div>

                </div>

            </div>

            {/* AI Insights */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-6">

                    <Brain
                        className="text-cyan-400"
                        size={28}
                    />

                    <h2 className="text-2xl font-bold text-white">
                        AI Strategic Insights
                    </h2>

                </div>

                <div className="space-y-5">

                    <div className="flex gap-3">

                        <AlertTriangle
                            className="text-yellow-400 mt-1"
                            size={18}
                        />

                        <p className="text-slate-300">
                            Restaurant and clothing sectors are highly saturated.
                        </p>

                    </div>

                    <div className="flex gap-3">

                        <TrendingUp
                            className="text-emerald-400 mt-1"
                            size={18}
                        />

                        <p className="text-slate-300">
                            Demand for pet-related services is increasing rapidly.
                        </p>

                    </div>

                    <div className="flex gap-3">

                        <Brain
                            className="text-cyan-400 mt-1"
                            size={18}
                        />

                        <p className="text-slate-300">
                            AI predicts a 92% success probability for a pet store
                            in this location.
                        </p>

                    </div>

                </div>

            </div>

        </AuthenticatedLayout>
    );
};