import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthenticatedLayout } from '../components/core/AuthenticatedLayout';
import { StatCard } from '../components/core/StatCard';
import { QuickAccessTile } from '../components/core/QuickAccessTile';
import { 
    Search, DollarSign, Package, MapPin, TrendingUp, LineChart, ClipboardList 
} from 'lucide-react';

export const DashboardPage = () => {
    const { setCurrentPage, theme } = useAuth();
    return (
        <AuthenticatedLayout>
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <h1 className="text-4xl font-bold text-white tracking-wide">Business Overview</h1>
                <div className={`${theme.input} rounded-xl px-4 py-2 flex items-center gap-2 border`}>
                    <Search className="text-slate-400" size={20} />
                    <input type="text" placeholder="Search insights..." className="bg-transparent text-white outline-none" />
                </div>
            </div>
            
            {/* KPI Cards */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                <StatCard title="Total Sales" value="₹5,400" trend="+12% from last month" color="text-emerald-400" icon={DollarSign} />
                <StatCard title="Total Inventory" value="340 Items" trend="Check stock levels" color="text-cyan-400" icon={Package} onClick={() => setCurrentPage('inventory')} />
                <StatCard title="New Locations" value="2 Opportunities" trend="High Market Potential" color="text-purple-400" icon={MapPin} onClick={() => setCurrentPage('market-entry')} />
                <StatCard title="Profit Margin" value="38%" trend="+2.1% this quarter" color="text-yellow-400" icon={TrendingUp} onClick={() => setCurrentPage('analytics')} />
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Sales Chart */}
                <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50 md:col-span-2`}>
                    <h3 className="text-2xl font-bold text-white mb-4">Sales Performance (Last 30 Days)</h3>
                    <div className="aspect-video bg-slate-800/50 rounded-xl flex items-center justify-center mb-4 border border-slate-700">
                        <LineChart className="text-indigo-400" size={64} />
                    </div>
                </div>
                
                {/* Quick Access Tiles */}
                <div className="space-y-4">
                    <QuickAccessTile page='analytics' icon={LineChart} label='In-Depth Analytics' subtitle='View detailed reports' />
                    <QuickAccessTile page='inventory' icon={Package} label='Manage Inventory' subtitle='Stock, pricing, and history' />
                    <QuickAccessTile page='transactions' icon={ClipboardList} label='Financial Ledger' subtitle='View connected transactions' />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};