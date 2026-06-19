import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthenticatedLayout } from '../components/core/AuthenticatedLayout';
import { DollarSign } from 'lucide-react';

export const TransactionsPage = () => {
    const { theme } = useAuth();
    const [hasConnectedBank, setHasConnectedBank] = useState(false);
    
    
    if (!hasConnectedBank) {
        return (
            <AuthenticatedLayout>
                <div className="max-w-4xl mx-auto p-6 flex items-center justify-center min-h-[70vh]">
                    <div className={`${theme.card} rounded-2xl p-12 border border-slate-700/50 text-center max-w-2xl shadow-2xl`}>
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-cyan-500/50">
                            <DollarSign className="text-white" size={64} />
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-4">Transactions</h1>
                        <h2 className="text-2xl font-semibold text-white mb-3">Automate Your Financial Ledger</h2>
                        <p className="text-slate-400 text-lg mb-8">
                            Connect your bank or UPI account to automatically generate a clean, categorized financial ledger.
                        </p>
                        <button onClick={() => setHasConnectedBank(true)} className={`py-4 px-8 rounded-xl ${theme.button} text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all`}>
                            Connect Bank Account
                        </button>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }
    
    
    const transactions = [
        { desc: 'Payment from Customer A (Sales)', date: 'Oct 25, 2025', amount: '+2,500', type: 'income' },
        { desc: 'Rent Payment (Expense)', date: 'Oct 24, 2025', amount: '-1,200', type: 'expense' },
        { desc: 'UPI from B. Sharma (Sales)', date: 'Oct 23, 2025', amount: '+1,500', type: 'income' }
    ];

    return (
        <AuthenticatedLayout>
            <h1 className="text-4xl font-bold text-white">Financial Transactions</h1>
            <div className="grid md:grid-cols-2 gap-6">
                <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50 shadow-md`}>
                    <h3 className="text-xl font-medium text-slate-400 mb-2">Total Revenue (YTD)</h3>
                    <p className="text-5xl font-extrabold text-emerald-400">₹1,50,400</p>
                </div>
                <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50 shadow-md`}>
                    <h3 className="text-xl font-medium text-slate-400 mb-2">Total Expenses (YTD)</h3>
                    <p className="text-5xl font-extrabold text-red-400">₹85,100</p>
                </div>
            </div>
            <h2 className="text-3xl font-bold text-white mt-4">Recent Activity</h2>
            <div className="space-y-4">
                {transactions.map((transaction, idx) => (
                    <div key={idx} className={`${theme.card} rounded-2xl p-6 border border-slate-700/50 shadow-sm`}>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white">{transaction.desc}</h3>
                                <p className="text-slate-400 mt-1">{transaction.date}</p>
                            </div>
                            <p className={`text-2xl font-bold ${transaction.type === 'income' ? 'text-emerald-400' : 'text-red-400'}`}>
                                {transaction.amount}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
};