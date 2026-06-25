import React from 'react';

interface SpinnerProps {
    show?: boolean;
    message?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ show = true, message = 'Loading...' }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-site-neutrals-0/80 via-site-neutrals-25/90 to-site-neutrals-50/95 backdrop-blur-lg backdrop-saturate-150">
            <div className="flex  space-x-1 max-w-sm mx-4">
                <div className="relative mt-1">
                    <div className="w-6 h-6 border-3 border-site-neutrals-200/50 rounded-full animate-spin border-t-site-primary-600"></div>
                    <div className="absolute inset-0 w-6 h-6 border-3 border-transparent rounded-full animate-pulse border-t-site-primary-400/60"></div>
                </div>
                <div className="text-center">
                    <p className="text-site-neutrals-900 font-medium text-2xl">{message}</p>
                    <div className="flex space-x-1.5 mt-2 justify-center">
                        <div className="w-2.5 h-2.5 bg-site-primary-600 rounded-full animate-bounce"></div>
                        <div className="w-2.5 h-2.5 bg-site-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2.5 h-2.5 bg-site-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Spinner };
export default Spinner;
