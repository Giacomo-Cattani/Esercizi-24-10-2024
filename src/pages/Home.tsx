import React from 'react';
import { useAuth } from '../context';

export const Home: React.FC = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">Home</h1>
            <p className="mt-4">Welcome to the Home page</p>
            {
                isLoggedIn && (
                    <div className="dashboard mt-10">
                        <h2 className="text-xl font-semibold">Dashboard</h2>
                        <p className="mt-2">Here is your dashboard content.</p>
                    </div>
                )}
        </div>
    );
};
