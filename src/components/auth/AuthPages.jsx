import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { ShieldCheck, User, Lock, Mail } from 'lucide-react'; // Added Lock and Mail icons
import { useState } from 'react';
// NEW CLEAN IMPORTS
import { useNavigate, Link } from 'react-router-dom'; // <-- Combine Link and useNavigate

const API_URL = 'http://localhost:3000'; 

// --- Common Style Classes for Consistency ---
// Note: theme.card and theme.input are still respected for custom theme colors.
const cardStyle = "backdrop-blur-xl rounded-2xl p-6 sm:p-10 max-w-md w-full border border-slate-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)]";
const inputStyle = (theme) => `w-full px-4 py-3 rounded-lg ${theme.input} bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition`;
const buttonStyle = (theme, loading) => `w-full py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold text-lg shadow-lg transition-all transform ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.01] hover:from-cyan-500 hover:to-indigo-500 shadow-cyan-500/30'}`;
const iconGradient = "inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 mb-4 shadow-xl";

// -------------------------------


export const SignInPage = () => {
    const { setIsAuthenticated, appName, theme } = useAuth(); 
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSignIn = async () => {
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_URL}/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setIsAuthenticated(true); 
            } else {
                setError(data.message || 'Authentication failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Network Error:', err);
            setError('Could not connect to the authentication server (Is the Node.js server running?).');
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 flex-grow py-12"> 
            <div className={cardStyle}>
                <div className="text-center mb-8">
                    <div className={iconGradient}>
                        <ShieldCheck size={36} className="text-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">{appName}</h1>
                    <p className="text-slate-400 text-sm sm:text-base">Sign in to access your business intelligence dashboard</p>
                </div>

                {error && (
                    <div className="bg-red-900/40 text-red-300 text-center mb-6 p-3 rounded-lg border border-red-700/50 text-sm">
                        {error}
                    </div>
                )}
                
                <div className="space-y-4">
                    <input 
                        type="email" 
                        placeholder="Email / Username" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputStyle(theme)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSignIn()}
                        className={inputStyle(theme)}
                    />

                    <div className="flex justify-end pt-1">
                        <Link to="/forgot-password" className="text-cyan-400 hover:text-cyan-300 text-sm transition font-medium">Forgot Password?</Link>
                    </div>

                    <button 
                        onClick={handleSignIn} 
                        disabled={loading}
                        className={buttonStyle(theme, loading)}
                    >
                        {loading ? 'Signing In...' : 'Sign In Securely'}
                    </button>

                    <p className="text-center text-slate-400 text-sm pt-4">
                        Don't have an account? 
                        {/* 🔑 CRITICAL FIX: Applied styles directly with ml-3 and text-cyan-300 */}
                        <Link 
                            to="/signup" 
                            // Applied aggressive visibility classes
                            className="text-cyan-300 hover:text-cyan-200 font-bold ml-3 underline-offset-2 hover:underline transition relative z-20"
                        >
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
// --- SignUpPage ---

export const SignUpPage = () => {
    const { appName, theme } = useAuth(); 
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignUp = async () => {
        setError(null);
        if (!formData.username || !formData.email || !formData.password) {
            setError('Please fill in all fields.');
            return;
        }
        setLoading(true);
        // ... (API call logic remains the same) ...
        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData), 
            });

            if (response.ok) {
                console.log('Sign Up successful');
                navigate("/business-setup");
            } else {
                const errorData = await response.json();
                setError(`Sign Up failed: ${errorData.message || 'Server error'}`);
            }
        } catch (error) {
            console.error('Network error during sign up:', error);
            setError('A network error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const signupIconGradient = "inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 mb-4 shadow-xl";
    const purpleVisibleLinkStyle = "text-purple-300 hover:text-purple-200 font-bold ml-3 underline-offset-2 hover:underline transition relative z-20";
    
    return (
        // Layout: flex-grow ensures vertical centering inside PageLayout
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 flex-grow py-12">
            <div className={cardStyle}>
                <div className="text-center mb-8">
                    <div className={signupIconGradient}>
                        <User size={36} className="text-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">Join {appName}</h1>
                    <p className="text-slate-400 text-sm sm:text-base">Create your business intelligence account</p>
                </div>
                
                {error && (
                    <div className="bg-red-900/40 text-red-300 text-center mb-6 p-3 rounded-lg border border-red-700/50 text-sm">
                        {error}
                    </div>
                )}

                <div className="space-y-4">
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={formData.username}
                        onChange={handleInputChange}
                        className={inputStyle(theme).replace('cyan', 'purple')} // Use purple focus ring
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className={inputStyle(theme).replace('cyan', 'purple')}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleInputChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleSignUp()}
                        className={inputStyle(theme).replace('cyan', 'purple')}
                    />
                    
                    <button 
                        onClick={handleSignUp} 
                        disabled={loading}
                        className={`w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg shadow-lg transition-all transform ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.01] hover:from-purple-500 hover:to-indigo-500 shadow-purple-500/30'}`}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>

                    <p className="text-center text-slate-400 text-sm pt-4">
                        Already have an account? 
                        <Link to="/signin" className={textLinkStyle.replace('cyan', 'purple')}>Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- ForgotPasswordPage ---

export const ForgotPasswordPage = () => {
    const { theme } = useAuth();
    return (
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 flex-grow py-12">
            <div className={cardStyle}>
                <div className="text-center mb-8">
                    <div className={iconGradient}>
                        <Mail size={36} className="text-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">Forgot Password</h1>
                    <p className="text-slate-400 text-sm sm:text-base">Enter your email to receive a password reset code</p>
                </div>
                <div className="space-y-4">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className={inputStyle(theme)} 
                    />
                    {/* Link component acts as the button */}
                    <Link to="/verify-code" className={buttonStyle(theme, false) + " block text-center"}>
                        Send Reset Link
                    </Link>
                    <p className="text-center text-slate-400 text-sm pt-4">
                        Remember your password? 
                        <Link to="/signin" className={textLinkStyle}>Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- VerifyCodePage ---

export const VerifyCodePage = () => {
    const { theme } = useAuth();
    return (
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 flex-grow py-12">
            <div className={cardStyle}>
                <div className="text-center mb-8">
                    <div className={iconGradient}>
                        <Lock size={36} className="text-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">Enter Code</h1>
                    <p className="text-slate-400 text-sm sm:text-base">Enter the 6-digit code sent to your email</p>
                </div>
                <div className="flex gap-3 mb-6 justify-center">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <input 
                            key={i} 
                            type="text" 
                            maxLength="1" 
                            className={`w-10 h-10 md:w-12 md:h-12 text-center text-xl md:text-2xl rounded-lg ${theme.input} bg-slate-800/50 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition`} 
                        />
                    ))}
                </div>
                {/* Link component acts as the button */}
                <Link to="/reset-password" className={buttonStyle(theme, false) + " block text-center"}>
                    Verify Code
                </Link>
                <p className="text-center text-slate-400 text-sm pt-4">
                    Haven't got the email yet? <button className="text-cyan-400 hover:text-cyan-300 font-semibold ml-1">Resend Code</button>
                </p>
            </div>
        </div>
    );
};

// --- ResetPasswordPage ---

export const ResetPasswordPage = () => {
    const { theme } = useAuth();
    return (
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 flex-grow py-12">
            <div className={cardStyle}>
                <div className="text-center mb-8">
                    <div className={iconGradient}>
                        <Lock size={36} className="text-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">New Password</h1>
                    <p className="text-slate-400 text-sm sm:text-base">Create a new secure password</p>
                </div>
                <div className="space-y-4">
                    <input 
                        type="password" 
                        placeholder="Enter your new password" 
                        className={inputStyle(theme)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Confirm your new password" 
                        className={inputStyle(theme)} 
                    />
                    {/* Link component acts as the button */}
                    <Link to="/signin" className={buttonStyle(theme, false) + " block text-center"}>
                        Set New Password
                    </Link>
                    <p className="text-center text-slate-400 text-sm pt-4">
                        Remember your password? 
                        <Link to="/signin" className={textLinkStyle}>Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};