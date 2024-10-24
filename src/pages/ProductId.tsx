import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productData } from './Products';

const ProductId: React.FC = () => {
    let { id } = useParams();
    const product = id ? productData.find((product) => product.id === parseInt(id)) : undefined;
    const navigate = useNavigate();

    return (
        <div className="container mx-auto p-4">
            <button onClick={() => navigate(-1)} className="mb-4 flex items-center text-indigo-500 hover:text-indigo-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Go Back
            </button>
            <div className="text-2xl font-bold mb-4">Product Details</div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product?.name}</div>
                        <div className="mt-4 text-xl font-bold">{product?.price}</div>
                        <button className="mt-6 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductId;