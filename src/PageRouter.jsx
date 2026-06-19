import React from 'react';
import { createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { RefreshCw, Layout } from 'lucide-react';
import { useAuth } from './context/AuthContext';

import { 
    SignInPage, SignUpPage, ForgotPasswordPage, VerifyCodePage, ResetPasswordPage 
} from './components/auth/AuthPages';
import { 
    BusinessSetupPage, SetupCompletePage 
} from './components/auth/SetupPages';

import { DashboardPage } from './pages/DashboardPage';
import { 
    InventoryPage, AddItemPage, InventoryHistoryPage, InventoryDetailsPage 
} from './pages/InventoryPages';
import { 
    MarketEntryPage, LocationDetailsPage, PickLocationPage 
} from './pages/MarketEntryPages';
import { TransactionsPage } from './pages/FinancialPages';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { ProfilePage } from './pages/ProfilePage';

// ... (ProtectedRoute and PublicOnlyRoute remain the same) ...

const ProtectedRoute = ({ redirectPath = '/signin' }) => {
  // NOTE: In a real app, useAuth() would provide the real state
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin" />
            <span className="ml-3 text-lg font-medium text-gray-700">Loading Session...</span>
        </div>
    );
  }

  // If not authenticated, redirect to the sign-in page.
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // If authenticated, render the nested routes (children via Outlet).
  return <Outlet />;
};

const PublicOnlyRoute = ({ redirectPath = '/dashboard' }) => {
  // NOTE: In a real app, useAuth() would provide the real state
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin" />
            <span className="ml-3 text-lg font-medium text-gray-700">Loading Session...</span>
        </div>
    );
  }

  // If authenticated, navigate to the default protected page (Dashboard).
  if (isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // If not authenticated, render the nested routes (children via Outlet).
  return <Outlet />;
};


const PageLayout = () => {
    const { isAuthenticated } = useAuth();
    
    // Conditional background class based on authentication status
    // Public routes get the full-screen dark gradient and flex-col for vertical centering.
    const backgroundClass = isAuthenticated
        ? "bg-gray-100 min-h-screen" 
        : "min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex flex-col";

    return (
        <div className={`font-sans antialiased text-gray-800 ${backgroundClass}`}>
            
            {/* Main Application Layout Header (Only show for authenticated pages) */}
            {isAuthenticated && (
                <div className="p-4 bg-indigo-700 text-white shadow-lg text-center">
                    <span className="text-xl font-bold">Main Application Layout</span>
                </div>
            )}
            
            {/* Renders the matched route component, which uses flex-grow for centering */}
            <Outlet /> 
        </div>
    );
}

export const PageRouter = () => {
    // Removed unused currentPage, isAuthenticated from here as they are handled in Protected/PublicOnly routes
    
    return (
    <BrowserRouter>
      <Routes>
        {/* All routes share the PageLayout */}
        <Route element={<PageLayout />}>

          {/* --- 1. PUBLIC ROUTES (Needs PublicOnlyRoute for logged-in users) --- */}
          <Route element={<PublicOnlyRoute redirectPath="/dashboard" />}>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/verify-code" element={<VerifyCodePage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/business-setup" element={<BusinessSetupPage />} />
            <Route path="/setup-complete" element={<SetupCompletePage />} />
          </Route>

          {/* --- 2. PROTECTED ROUTES (Needs ProtectedRoute for auth check) --- */}
          <Route element={<ProtectedRoute redirectPath="/signin" />}>
            {/* The root path / should resolve to the dashboard if authenticated */}
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />

            {/* Inventory Routes */}
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/inventory/add" element={<AddItemPage />} />
            <Route path="/inventory/history" element={<InventoryHistoryPage />} />
            <Route path="/inventory/:id" element={<InventoryDetailsPage />} />

            {/* Location/Market Routes */}
            <Route path="/market-entry" element={<MarketEntryPage />} />
            <Route path="/locations/pick" element={<PickLocationPage />} />
            <Route path="/locations/:id" element={<LocationDetailsPage />} />

            {/* Other Authenticated Pages */}
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          {/* --- 3. CATCH-ALL ROUTE --- */}
          {/* Handles any unknown path by redirecting to the sign-in page if no public/protected route matched */}
          <Route path="*" element={<Navigate to="/signin" replace />} />

        </Route>
      </Routes>
    </BrowserRouter>
    );
}