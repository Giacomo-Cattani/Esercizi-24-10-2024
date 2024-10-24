import React from 'react';

export const Cart: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <div className="bg-white shadow-md rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold">Product Name</div>
                    <div className="text-lg font-semibold">Price</div>
                    <div className="text-lg font-semibold">Quantity</div>
                    <div className="text-lg font-semibold">Total</div>
                </div>
                {/* Example item */}
                <div className="flex justify-between items-center mb-4">
                    <div className="text-lg">Example Product</div>
                    <div className="text-lg">$10.00</div>
                    <div className="text-lg">1</div>
                    <div className="text-lg">$10.00</div>
                </div>
                {/* Add more items here */}
                <div className="flex justify-end items-center mt-4">
                    <div className="text-xl font-bold">Total: $10.00</div>
                </div>
                <div className="flex justify-end mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};
