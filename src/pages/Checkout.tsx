import { Outlet, useNavigate } from 'react-router-dom';

export const Checkout = () => {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>

            {/* <div className="mb-4 flex justify-between">
                <button onClick={() => navigate('/checkout/shipping')} className="text-blue-500">
                    Shipping
                </button>
                <button onClick={() => navigate('/checkout/payment')} className="text-blue-500">
                    Payment
                </button>
                <button onClick={() => navigate('/checkout/confirmation')} className="text-blue-500">
                    Confirmation
                </button>
            </div> */}

            {/* Nested Routes for the Checkout Steps */}
            <Outlet />
        </div>
    );
};
