import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthenticatedLayout } from '../components/core/AuthenticatedLayout';
import { 
    Package, Camera, History, Plus, Eye, ChevronRight, BarChart3 
} from 'lucide-react';

export const InventoryPage = () => {
    const { setCurrentPage, theme } = useAuth();
    return (
        <AuthenticatedLayout>
            <h1 className="text-4xl font-bold text-white">Inventory Management</h1>
            
            <div className="grid md:grid-cols-3 gap-6">
                {/* Inventory Snapshot Card */}
                <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50 shadow-xl`}>
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 shadow-cyan-500/30">
                        <Camera className="text-white" size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">Instant Stock Check</h3>
                    <p className="text-slate-400 text-sm text-center mb-4">Use your camera for a rapid physical inventory scan.</p>
                    <button className={`w-full py-2 rounded-xl ${theme.button} text-white font-medium`}>
                        Start Scanning
                    </button>
                </div>
                
                {/* History Card */}
                <div onClick={() => setCurrentPage('inventory-history')} className={`${theme.card} ${theme.cardHover} rounded-2xl p-6 border border-slate-700/50 cursor-pointer transition-all shadow-md`}>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-purple-500/20 mb-4">
                        <History className="text-purple-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">Inventory History</h3>
                    <p className="text-slate-400 text-sm text-center">Track changes and discrepancies over time.</p>
                    <ChevronRight className="text-slate-600 mx-auto mt-4" />
                </div>
                
                {/* Insights Card */}
                <div onClick={() => setCurrentPage('analytics')} className={`${theme.card} ${theme.cardHover} rounded-2xl p-6 border border-slate-700/50 cursor-pointer transition-all shadow-md`}>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-emerald-500/20 mb-4">
                        <BarChart3 className="text-emerald-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">Stock Insights</h3>
                    <p className="text-slate-400 text-sm text-center">Identify slow-moving and fast-selling items.</p>
                    <ChevronRight className="text-slate-600 mx-auto mt-4" />
                </div>
            </div>
            
            <div className={`${theme.card} rounded-2xl p-6 border border-slate-700/50 space-y-4 shadow-xl`}>
                <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">Quick Actions</h3>
                
                <button className={`w-full ${theme.input} border rounded-xl p-4 flex items-center gap-3 hover:border-cyan-500 transition text-left`}>
                    <Camera className="text-cyan-400" size={24} />
                    <span className="text-white font-medium">Scan new inventory (Barcode/OCR)</span>
                </button>
                <button onClick={() => setCurrentPage('add-item')} className={`w-full ${theme.input} border rounded-xl p-4 flex items-center gap-3 hover:border-cyan-500 transition text-left`}>
                    <Plus className="text-cyan-400" size={24} />
                    <span className="text-white font-medium">Add item manually</span>
                </button>
                <button onClick={() => setCurrentPage('inventory-details')} className={`w-full ${theme.input} border rounded-xl p-4 flex items-center gap-3 hover:border-cyan-500 transition text-left`}>
                    <Eye className="text-white" size={24} />
                    <span className="text-white font-medium">View detailed saved inventory</span>
                </button>
            </div>
        </AuthenticatedLayout>
    );
};

export const AddItemPage = () => {
    const { setCurrentPage, theme } = useAuth();
    return (
        <AuthenticatedLayout>
            <h1 className="text-4xl font-bold text-white">Add New Item</h1>
            <div className={`${theme.card} rounded-2xl p-8 border border-slate-700/50 shadow-xl`}>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                        <label className="block text-white font-medium mb-2">Name</label>
                        <input type="text" placeholder="Item name" className={`w-full px-4 py-3 rounded-xl ${theme.input} border text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition`} />
                    </div>
                    <div>
                        <label className="block text-white font-medium mb-2">Quantity</label>
                        <input type="number" placeholder="0" className={`w-full px-4 py-3 rounded-xl ${theme.input} border text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition`} />
                    </div>
                    <div>
                        <label className="block text-white font-medium mb-2">Price (INR)</label>
                        <input type="number" placeholder="₹0" className={`w-full px-4 py-3 rounded-xl ${theme.input} border text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition`} />
                    </div>
                </div>
                <button className={`w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold flex items-center justify-center gap-2 mb-4 shadow-md`}>
                    <Plus size={20} />
                    Add Another Item
                </button>
                <button className={`w-full py-3 rounded-xl ${theme.button} text-white font-semibold mb-3 shadow-lg`}>
                    Save Inventory
                </button>
                <button onClick={() => setCurrentPage('inventory-details')} className={`w-full py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition`}>
                    View Saved Inventory
                </button>
            </div>
        </AuthenticatedLayout>
    );
};

export const InventoryHistoryPage = () => {
    const { setCurrentPage, theme } = useAuth();
    const snapshots = [
        { date: 'October 28, 2025', time: '08:30 AM', items: 320, value: '₹69,640' },
        { date: 'October 27, 2025', time: '11:30 AM', items: 130, value: '₹35,230' },
        { date: 'October 26, 2025', time: '10:30 AM', items: 162, value: '₹39,640' },
    ];
    return (
        <AuthenticatedLayout>
            <h1 className="text-4xl font-bold text-white">Inventory History</h1>
            <div className="space-y-4">
                {snapshots.map((snapshot, idx) => (
                    <div key={idx} onClick={() => setCurrentPage('inventory-details')} className={`${theme.card} ${theme.cardHover} rounded-2xl p-6 border border-slate-700/50 cursor-pointer transition-all shadow-md hover:shadow-lg`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                    <Package className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Snapshot: {snapshot.date}</h3>
                                    <div className="flex gap-4 mt-1 text-sm">
                                        <p className="text-slate-400">Items: <span className="text-white font-medium">{snapshot.items}</span></p>
                                        <p className="text-slate-400">Total Value: <span className="text-emerald-400 font-medium">{snapshot.value}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-white font-medium">{snapshot.time}</p>
                                <ChevronRight className="text-slate-600 ml-auto mt-2" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
};

export const InventoryDetailsPage = () => {
    const { theme } = useAuth();
    return (
        <AuthenticatedLayout>
            <div>
                <h1 className="text-4xl font-bold text-white">Inventory Details</h1>
                <p className="text-slate-400 mt-2">Snapshot taken on October 26, 2025 at 10:30 AM</p>
            </div>
            <div className="space-y-4">
                {[
                    { name: 'T-Shirt (White)', quantity: 130, price: '₹350' },
                    { name: 'Notebook (A4)', quantity: 100, price: '₹40' },
                    { name: 'Coffee Mug', quantity: 12, price: '₹120', lowStock: true }
                ].map((item, idx) => (
                    <div key={idx} className={`${theme.card} rounded-2xl p-6 border ${item.lowStock ? 'border-red-600' : 'border-slate-700/50'}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.lowStock ? 'from-red-500 to-orange-500' : 'from-cyan-500 to-blue-500'} flex items-center justify-center shadow-lg`}>
                                    <Package className="text-white" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                                    {item.lowStock && <p className="text-red-400 font-semibold text-sm">LOW STOCK WARNING</p>}
                                    <div className="flex gap-6 mt-2">
                                        <p className="text-slate-400">Quantity: <span className="text-white font-medium">{item.quantity}</span></p>
                                        <p className="text-slate-400">Price: <span className="text-white font-medium">{item.price}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
};