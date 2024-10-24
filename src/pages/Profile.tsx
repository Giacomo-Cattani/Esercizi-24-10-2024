import React, { useEffect } from 'react';
import { useAuth } from '../context';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/pngwing.com.png';

export const Profile: React.FC = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex items-center justify-center mb-4">

                    <img src={profileImage} className="w-24 h-24 rounded-full" alt="Profile" />
                </div>
                <h2 className="text-2xl font-semibold text-center mb-2">John Doe</h2>
                <p className="text-center text-gray-600 mb-4">Software Engineer</p>
                <div className="text-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    );
};