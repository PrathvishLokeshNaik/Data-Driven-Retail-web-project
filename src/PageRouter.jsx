import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet
} from 'react-router-dom';

import { RefreshCw } from 'lucide-react';

import { useAuth } from './context/AuthContext';
import { Navigation } from './components/core/Navigation';

import {
    SignInPage,
    SignUpPage,
    ForgotPasswordPage,
    VerifyCodePage,
    ResetPasswordPage
} from './components/auth/AuthPages';

import {
    BusinessSetupPage,
    SetupCompletePage
} from './components/auth/SetupPages';

import { DashboardPage } from './pages/DashboardPage';
import { MarketEntryPage } from './pages/MarketEntryPages';
import { BusinessFeasibilityPage } from './pages/BusinessFeasibilityPage';
import { CompetetionAnalysisPage } from './pages/CompetetionAnalysisPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { ProfilePage } from './pages/ProfilePage';

const ProtectedRoute = ({ redirectPath = '/signin' }) => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <RefreshCw className="w-8 h-8 animate-spin" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

const PublicOnlyRoute = ({ redirectPath = '/dashboard' }) => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <RefreshCw className="w-8 h-8 animate-spin" />
            </div>
        );
    }

    if (isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

const PageLayout = () => {
    const { isAuthenticated } = useAuth();

    const backgroundClass = isAuthenticated
        ? 'bg-gray-100 min-h-screen'
        : 'min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex flex-col';

    return (
        <div className={`font-sans antialiased text-gray-800 ${backgroundClass}`}>
            {isAuthenticated && <Navigation />}
            <Outlet />
        </div>
    );
};

export const PageRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<PageLayout />}>

                    <Route element={<PublicOnlyRoute />}>

                        <Route path="/signin" element={<SignInPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                        <Route path="/verify-code" element={<VerifyCodePage />} />
                        <Route path="/reset-password" element={<ResetPasswordPage />} />
                        <Route path="/business-setup" element={<BusinessSetupPage />} />
                        <Route path="/setup-complete" element={<SetupCompletePage />} />

                    </Route>

                    <Route element={<ProtectedRoute />}>

                        <Route path="/" element={<DashboardPage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />

                        <Route
                            path="/market-entry"
                            element={<MarketEntryPage />}
                        />

                        <Route
                            path="/competition"
                            element={<CompetetionAnalysisPage />}
                        />

                        <Route
                            path="/analytics"
                            element={<AnalyticsPage />}
                        />

                        <Route
                            path="/business-feasibility"
                            element={<BusinessFeasibilityPage />}
                        />

                        <Route
                            path="/profile"
                            element={<ProfilePage />}
                        />

                    </Route>

                    <Route
                        path="*"
                        element={<Navigate to="/signin" replace />}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
};