import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthenticatedLayout } from '../components/core/AuthenticatedLayout';
import { 
    TrendingUp, User, DollarSign, FileText, ClipboardList, MapPin, BarChart3 
} from 'lucide-react';

const AnalyticsCard = ({ title, subtitle, color, icon: Icon }) => {
    const { theme } = useAuth();
    return (
        <div className={`${theme.card} ${theme.cardHover} rounded-2xl p-6 border border-slate-700/50 transition-all cursor-pointer shadow-md`}>
            <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full ${color}/20 flex items-center justify-center`}>
                    <Icon className={color} size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-slate-400 text-sm">{subtitle}</p>
                </div>
            </div>
            <div className="aspect-video bg-slate-800/50 rounded-lg flex items-center justify-center border border-slate-700">
                <span className="text-slate-600">Chart Visualization</span>
            </div>
        </div>
    );
};

const ReportButton = ({ icon: Icon, label }) => {
    const { theme } = useAuth();
    return (
        <button className={`w-full ${theme.button} py-3 rounded-xl flex items-center justify-center gap-3 text-white font-medium hover:scale-[1.01] transition`}>
            <Icon size={20} />
            {label}
        </button>
    );
};


export const AnalyticsPage = () => {
    const { setCurrentPage, theme } = useAuth();
    
    return (
        <AuthenticatedLayout>
            <h1 className="text-4xl font-bold text-white border-b border-slate-800 pb-4">Analytics & Business Intelligence</h1>
            <p className="text-slate-400 text-lg">Data-driven insights to boost your **VaapyaarIQ**</p>
            
            <div className="grid md:grid-cols-3 gap-6">
                <AnalyticsCard title="Sales Funnel" subtitle="Conversion rates" color="text-indigo-400" icon={TrendingUp} />
                <AnalyticsCard title="Customer Demographics" subtitle="Who is buying what?" color="text-pink-400" icon={User} />
                <AnalyticsCard title="Expense Deep Dive" subtitle="Cost vs. Revenue Analysis" color="text-red-400" icon={DollarSign} />
            </div>

            <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50 shadow-xl`}>
                <h2 className="text-2xl font-bold text-white mb-4">Report Generation</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <ReportButton icon={FileText} label="Generate P&L Report" />
                    <ReportButton icon={ClipboardList} label="Low Stock Forecast" />
                    <ReportButton icon={MapPin} label="Location Profitability" />
                    <ReportButton icon={BarChart3} label="Custom Data Export" />
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
};