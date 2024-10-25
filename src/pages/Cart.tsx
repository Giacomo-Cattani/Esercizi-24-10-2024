import React from 'react';
import { useCartStore } from '../store';
import { useNavigate } from 'react-router-dom';

export const Cart: React.FC = () => {
    const { items, removeItem } = useCartStore(); // Retrieve items and removeItem from store
    const navigate = useNavigate(); // Navigate to different routes
    // Calculate total price
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <div className="bg-white shadow-md rounded-lg p-4">
                {/* Cart Header */}
                <div className="flex justify-between items-center mb-4 font-semibold">
                    <div className="text-lg">Product Name</div>
                    <div className="text-lg">Price</div>
                    <div className="text-lg">Quantity</div>
                    <div className="text-lg">Total</div>
                    <div className="text-lg">Action</div>
                </div>

                {/* Cart Items */}
                {items.length > 0 ? (
                    items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center mb-4">
                            <div className="text-lg">{item.name}</div>
                            <div className="text-lg">${item.price.toFixed(2)}</div>
                            <div className="text-lg">{item.quantity}</div>
                            <div className="text-lg">${(item.price * item.quantity).toFixed(2)}</div>
                            <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">Your cart is empty</div>
                )}

                {/* Cart Total */}
                {items.length > 0 && (
                    <div className="flex justify-end items-center mt-4">
                        <div className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</div>
                    </div>
                )}

                {/* Checkout Button */}
                {items.length > 0 && (
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={() => navigate('/checkout/shipping')}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
