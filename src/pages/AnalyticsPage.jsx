import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthenticatedLayout } from '../components/core/AuthenticatedLayout';

import {
    PieChart,
    TrendingUp,
    Brain,
    Store,
    AlertTriangle,
    Target,
    BarChart3
} from 'lucide-react';

const AnalyticsCard = ({
    title,
    value,
    subtitle,
    icon: Icon,
    color
}) => {
    const { theme } = useAuth();

    return (
        <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50`}>

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-slate-400">
                        {title}
                    </p>

                    <h2 className={`text-4xl font-bold ${color}`}>
                        {value}
                    </h2>

                    <p className="text-slate-500 mt-2">
                        {subtitle}
                    </p>

                </div>

                <Icon
                    className={color}
                    size={30}
                />

            </div>

        </div>
    );
};

const CategoryCard = ({
    category,
    count,
    competition,
    color
}) => {
    const { theme } = useAuth();

    return (
        <div className={`${theme.card} rounded-xl p-5 border border-slate-700/50`}>

            <h3 className="text-lg font-semibold text-white">
                {category}
            </h3>

            <p className="text-4xl font-bold text-white mt-2">
                {count}
            </p>

            <p className={`font-medium mt-3 ${color}`}>
                Competition: {competition}
            </p>

        </div>
    );
};

export const AnalyticsPage = () => {

    const { theme } = useAuth();

    return (
        <AuthenticatedLayout>

            {/* Header */}

            <div className="border-b border-slate-800 pb-6">

                <h1 className="text-4xl font-bold text-white">
                    Competition Intelligence
                </h1>

                <p className="text-slate-400 mt-2">
                    Analyze market saturation, demand forecasting,
                    and business opportunities.
                </p>

            </div>

            {/* KPI Section */}

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

                <AnalyticsCard
                    title="Demand Score"
                    value="88"
                    subtitle="Strong customer demand"
                    icon={TrendingUp}
                    color="text-emerald-400"
                />

                <AnalyticsCard
                    title="Competition Index"
                    value="62"
                    subtitle="Moderate competition"
                    icon={Store}
                    color="text-yellow-400"
                />

                <AnalyticsCard
                    title="Market Gap Score"
                    value="91"
                    subtitle="High opportunity"
                    icon={Target}
                    color="text-cyan-400"
                />

                <AnalyticsCard
                    title="AI Confidence"
                    value="92%"
                    subtitle="Prediction reliability"
                    icon={Brain}
                    color="text-purple-400"
                />

            </div>

            {/* Shop Distribution */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-6">

                    <PieChart
                        className="text-cyan-400"
                        size={28}
                    />

                    <h2 className="text-2xl font-bold text-white">
                        Shop Category Distribution
                    </h2>

                </div>

                <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">

                    <div className="text-center">

                        <PieChart
                            className="mx-auto text-cyan-400 mb-3"
                            size={60}
                        />

                        <p className="text-white">
                            Recharts Pie Chart Here
                        </p>

                    </div>

                </div>

            </div>

            {/* Competition Grid */}

            <div>

                <h2 className="text-3xl font-bold text-white mb-6">

                    Competition Analysis

                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <CategoryCard
                        category="Restaurants"
                        count="82"
                        competition="High"
                        color="text-red-400"
                    />

                    <CategoryCard
                        category="Medical Stores"
                        count="14"
                        competition="Medium"
                        color="text-yellow-400"
                    />

                    <CategoryCard
                        category="Pet Stores"
                        count="3"
                        competition="Low"
                        color="text-emerald-400"
                    />

                    <CategoryCard
                        category="Grocery"
                        count="25"
                        competition="Medium"
                        color="text-yellow-400"
                    />

                    <CategoryCard
                        category="Electronics"
                        count="18"
                        competition="Low"
                        color="text-emerald-400"
                    />

                    <CategoryCard
                        category="Clothing"
                        count="32"
                        competition="High"
                        color="text-red-400"
                    />

                </div>

            </div>

            {/* Demand Forecast */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-6">

                    <TrendingUp
                        className="text-emerald-400"
                        size={28}
                    />

                    <h2 className="text-2xl font-bold text-white">
                        Demand Forecast
                    </h2>

                </div>

                <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">

                    <div className="text-center">

                        <BarChart3
                            className="mx-auto text-emerald-400 mb-3"
                            size={60}
                        />

                        <p className="text-white">
                            Demand Prediction Graph
                        </p>

                    </div>

                </div>

            </div>

            {/* Opportunity Detection */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-6">

                    <Target
                        className="text-cyan-400"
                        size={28}
                    />

                    <h2 className="text-2xl font-bold text-white">
                        Market Opportunity Detection
                    </h2>

                </div>

                <div className="space-y-4">

                    <div className="bg-emerald-500/10 border border-emerald-500 rounded-xl p-4">

                        <h3 className="text-xl font-bold text-emerald-400">
                            Pet Store
                        </h3>

                        <p className="text-slate-300 mt-2">
                            Only 3 competitors in the area.
                            Demand is rising among residential families.
                        </p>

                    </div>

                    <div className="bg-cyan-500/10 border border-cyan-500 rounded-xl p-4">

                        <h3 className="text-xl font-bold text-cyan-400">
                            Organic Grocery
                        </h3>

                        <p className="text-slate-300 mt-2">
                            Increasing health-conscious customer base.
                        </p>

                    </div>

                    <div className="bg-purple-500/10 border border-purple-500 rounded-xl p-4">

                        <h3 className="text-xl font-bold text-purple-400">
                            EV Charging Station
                        </h3>

                        <p className="text-slate-300 mt-2">
                            Excellent road connectivity and growing EV adoption.
                        </p>

                    </div>

                </div>

            </div>

            {/* AI Insights */}

            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50`}>

                <div className="flex items-center gap-3 mb-4">

                    <Brain
                        className="text-cyan-400"
                        size={32}
                    />

                    <h2 className="text-3xl font-bold text-white">
                        AI Strategic Insights
                    </h2>

                </div>

                <div className="space-y-4">

                    <div className="flex gap-3">

                        <AlertTriangle
                            className="text-yellow-400 mt-1"
                            size={20}
                        />

                        <p className="text-slate-300">
                            Restaurant market appears saturated.
                            New food businesses may face strong competition.
                        </p>

                    </div>

                    <div className="flex gap-3">

                        <TrendingUp
                            className="text-emerald-400 mt-1"
                            size={20}
                        />

                        <p className="text-slate-300">
                            Pet-related businesses show the highest growth potential.
                        </p>

                    </div>

                    <div className="flex gap-3">

                        <Target
                            className="text-cyan-400 mt-1"
                            size={20}
                        />

                        <p className="text-slate-300">
                            Recommended investment category:
                            Retail Services and Specialty Stores.
                        </p>

                    </div>

                </div>

            </div>

        </AuthenticatedLayout>
    );
};