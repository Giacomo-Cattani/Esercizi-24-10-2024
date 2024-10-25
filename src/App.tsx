import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Home, Contatti, About, Products, Cart, Login, Profile, ProductId, Checkout, Shipping, /*Payment, Confirmation*/ } from './pages'
import { AuthProvider, useAuth } from './context';
import { Breadcrumbs } from './Components';

export const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                {/* Inserisci qui il menu di navigazione */}
                <Navigation />
                <div className='mt-7'>
                    <Breadcrumbs />
                    <Routes>
                        {/* Inserisci qui le routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductId />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contatti" element={<Contatti />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/checkout" element={<Checkout />}>
                            <Route path="shipping" element={<Shipping />}>
                                {/* <Route path="payment" element={<Payment />}>
                                    <Route path="confirmation" element={<Confirmation />} />
                            </Route> */}
                            </Route>
                            <Route index element={<Navigate to="shipping" />} /> {/* Default to Shipping */}
                        </Route>
                        <Route path="*" element={<h1>404 - Not Found</h1>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AuthProvider >
    );
};

const Navigation = () => {
    const { isLoggedIn } = useAuth(); // Moved inside Navigation component

    return (
        <nav className="bg-slate-900 text-white text-center flex gap-4 items-center justify-start p-4">
            <Link to="/" className="hover:text-slate-600 text-white font-bold py-2 px-4">
                Home
            </Link>
            <Link to="/products" className="hover:text-slate-600 text-white font-bold py-2 px-4">
                Prodotti
            </Link>
            <Link to="/cart" className="hover:text-slate-600 text-white font-bold py-2 px-4">
                Carrello
            </Link>
            <Link to="/about" className="hover:text-slate-600 text-white font-bold py-2 px-4">
                About
            </Link>
            <Link to="/contatti" className="hover:text-slate-600 text-white font-bold py-2 px-4">
                Contatti
            </Link>
            {isLoggedIn ? (
                <Link to="/profile" className="hover:text-slate-600 text-white font-bold py-2 px-4 ml-auto flex items-center">
                    <span>Profile</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 10a4 4 0 100-8 4 4 0 000 8zm-6 8a6 6 0 1112 0H4z" clipRule="evenodd" />
                    </svg>
                </Link>
            ) : (
                <Link to="/login" className="hover:text-slate-600 text-white font-bold py-2 px-4 ml-auto flex items-center">
                    <span>Login</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 10a4 4 0 100-8 4 4 0 000 8zm-6 8a6 6 0 1112 0H4z" clipRule="evenodd" />
                    </svg>
                </Link>
            )}
        </nav>
    );
};
