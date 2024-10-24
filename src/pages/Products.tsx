import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

export const productData = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 699 },
    { id: 3, name: 'Tablet', price: 499 }
];

export const Products: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {productData.map((product) => (
                    <div
                        key={product.id}
                        className="border p-4 rounded shadow cursor-pointer"
                    >
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-700">{product.price}</p>
                        <Link
                            to={`/products/${product.id}`}
                            className="text-blue-500 hover:underline"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};