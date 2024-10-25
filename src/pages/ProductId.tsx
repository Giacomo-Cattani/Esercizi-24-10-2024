import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productData } from './Products';
import { useCartStore } from '../store';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export const ProductId: React.FC = () => {
    let { id } = useParams();
    const product: CartItem | undefined = id ? productData.find((product) => product.id === parseInt(id)) as CartItem : {} as CartItem;
    const navigate = useNavigate();

    // State to manage the selected quantity
    const [quantity, setQuantity] = useState<number>(1);

    const handleAddToCart = () => {
        if (product) {
            // Add the product with the selected quantity to the cart
            useCartStore.getState().addItem({ ...product, quantity });
        }
    };

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
                        <div className="mt-4 text-xl font-bold">${product?.price}</div>

                        {/* Quantity Selector */}
                        <div className="mt-4 flex items-center">
                            <label className="mr-2">Quantity:</label>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="w-16 px-2 py-1 border rounded text-center"
                            />
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="mt-6 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
