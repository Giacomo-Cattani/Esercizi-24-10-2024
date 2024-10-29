import React from 'react';

export const Payment: React.FC = () => {
    const handlePayment = (event: React.FormEvent) => {
        event.preventDefault();
        // Add payment processing logic here
        console.log('Payment processed');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>
                <form onSubmit={handlePayment}>
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
                        <input type="text" id="cardNumber" name="cardNumber" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date:</label>
                        <input type="text" id="expiryDate" name="expiryDate" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV:</label>
                        <input type="text" id="cvv" name="cvv" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Pay Now</button>
                </form>
            </div>
        </div>
    );
};