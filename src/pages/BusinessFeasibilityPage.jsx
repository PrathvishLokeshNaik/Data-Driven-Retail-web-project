import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthenticatedLayout } from '../components/core/AuthenticatedLayout';

import {
    IndianRupee,
    TrendingUp,
    Brain,
    Target,
    AlertTriangle,
    CheckCircle,
    Wallet
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

export const BusinessFeasibilityPage = () => {

    const { theme } = useAuth();

    return (

        <AuthenticatedLayout>

            {/* Header */}

            <div className="border-b border-slate-800 pb-6">

                <h1 className="text-4xl font-bold text-white">

                    Business Feasibility Analysis

                </h1>

                <p className="text-slate-400 mt-2">

                    AI-powered investment and profitability prediction.

                </p>

            </div>

            {/* KPI Cards */}

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

                <MetricCard
                    title="Startup Cost"
                    value="₹8.5L"
                    color="text-red-400"
                />

                <MetricCard
                    title="Monthly Revenue"
                    value="₹1.8L"
                    color="text-emerald-400"
                />

                <MetricCard
                    title="Monthly Profit"
                    value="₹65K"
                    color="text-cyan-400"
                />

                <MetricCard
                    title="ROI Score"
                    value="84%"
                    color="text-purple-400"
                />

            </div>

            {/* Cost Breakdown */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-6">

                    <Wallet
                        className="text-cyan-400"
                        size={28}
                    />

                    <h2 className="text-2xl font-bold text-white">

                        Startup Cost Breakdown

                    </h2>

                </div>

                <div className="space-y-4">

                    {[
                        ["Shop Rent Deposit", "₹3,00,000"],
                        ["Interior Setup", "₹2,00,000"],
                        ["Licenses", "₹50,000"],
                        ["Initial Inventory", "₹2,50,000"],
                        ["Marketing", "₹50,000"]
                    ].map((item) => (

                        <div
                            key={item[0]}
                            className="flex justify-between bg-slate-800 rounded-xl p-4"
                        >

                            <span className="text-white">
                                {item[0]}
                            </span>

                            <span className="text-cyan-400 font-semibold">
                                {item[1]}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

            {/* Revenue Forecast */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-6">

                    <TrendingUp
                        className="text-emerald-400"
                        size={28}
                    />

                    <h2 className="text-2xl font-bold text-white">

                        Revenue Forecast

                    </h2>

                </div>

                <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center">

                    <div className="text-center">

                        <TrendingUp
                            className="mx-auto text-emerald-400 mb-3"
                            size={60}
                        />

                        <p className="text-white">

                            Revenue Forecast Chart

                        </p>

                    </div>

                </div>

            </div>

            {/* Break Even */}

            <div className="grid md:grid-cols-2 gap-6">

                <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50`}>

                    <h2 className="text-xl font-bold text-white mb-4">

                        Break-even Analysis

                    </h2>

                    <p className="text-6xl font-bold text-emerald-400">

                        13

                    </p>

                    <p className="text-slate-400 mt-2">

                        Months to recover investment

                    </p>

                </div>

                <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50`}>

                    <h2 className="text-xl font-bold text-white mb-4">

                        Success Probability

                    </h2>

                    <p className="text-6xl font-bold text-cyan-400">

                        92%

                    </p>

                    <p className="text-slate-400 mt-2">

                        Predicted by AI model

                    </p>

                </div>

            </div>

            {/* AI Recommendation */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-6">

                    <Brain
                        className="text-cyan-400"
                        size={28}
                    />

                    <h2 className="text-2xl font-bold text-white">

                        AI Feasibility Report

                    </h2>

                </div>

                <div className="space-y-5">

                    <div className="flex gap-3">

                        <CheckCircle
                            className="text-emerald-400 mt-1"
                            size={18}
                        />

                        <p className="text-slate-300">

                            Low competition in the selected category.

                        </p>

                    </div>

                    <div className="flex gap-3">

                        <Target
                            className="text-cyan-400 mt-1"
                            size={18}
                        />

                        <p className="text-slate-300">

                            Strong customer demand identified.

                        </p>

                    </div>

                    <div className="flex gap-3">

                        <IndianRupee
                            className="text-yellow-400 mt-1"
                            size={18}
                        />

                        <p className="text-slate-300">

                            Expected monthly profit exceeds industry average.

                        </p>

                    </div>

                </div>

                <div className="mt-8 bg-emerald-500/10 border border-emerald-500 rounded-xl p-6">

                    <h3 className="text-2xl font-bold text-emerald-400">

                        Recommended Investment

                    </h3>

                    <p className="text-slate-300 mt-2">

                        Pet Store business in Whitefield shows
                        excellent growth potential with low risk
                        and high ROI.

                    </p>

                </div>

            </div>

            {/* Risk Assessment */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-6">

                    <AlertTriangle
                        className="text-yellow-400"
                        size={28}
                    />

                    <h2 className="text-2xl font-bold text-white">

                        Risk Assessment

                    </h2>

                </div>

                <div className="space-y-3">

                    <p className="text-slate-300">
                        • Moderate rental cost fluctuations.
                    </p>

                    <p className="text-slate-300">
                        • Emerging competitors expected within 2 years.
                    </p>

                    <p className="text-slate-300">
                        • Strong residential demand reduces risk.
                    </p>

                </div>

            </div>

        </AuthenticatedLayout>

    );
};