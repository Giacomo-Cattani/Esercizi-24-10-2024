import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbProps {
    routes?: { name: string; path: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({ routes }) => {
    const location = useLocation();

    // Split the pathname from the current URL
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="flex items-center text-sm mb-4 ml-16">
            <Link to="/" className="text-gray-500 hover:text-indigo-600">
                Home
            </Link>

            {pathnames.length > 0 && (
                <span className="mx-2 text-gray-500">/</span>
            )}

            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <span key={to} className="text-gray-700">
                        {routes?.find((route) => route.path === to)?.name || value}
                    </span>
                ) : (
                    <React.Fragment key={to}>
                        <Link to={to} className="text-gray-500 hover:text-indigo-600">
                            {routes?.find((route) => route.path === to)?.name || value}
                        </Link>
                        <span className="mx-2 text-gray-500">/</span>
                    </React.Fragment>
                );
            })}
        </nav>
    );
};

