import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, Contatti, About, Products, Cart } from './pages'
import ProductId from './pages/ProductId';

export const App = () => {
    return (
        <div>
            <div >
                <BrowserRouter>
                    {/* Inserisci qui il menu di navigazione */}
                    <nav className="bg-slate-900 text-white text-center flex gap-4 items-center justify-start p-4">
                        <Link to="/" className="hover:text-slate-600 text-white font-bold py-2 px-4">
                            Home
                        </Link>
                        {// Esercizio 2: Catalogo Prodotti
                            /*
                            Crea un catalogo prodotti con:
                            - Lista prodotti (/products)
                            - Dettaglio prodotto (/product/:id)
                            - Carrello (/cart)

                            Funzionalità ad implementare:
                            - Navigazione tra le pagine
                            - Uso di useParams per il dettaglio prodotto
                            - Uso di useNavigate per tornare alla lista */
                        }
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
                    </nav>

                    <div className='mt-7'>
                        <Routes>
                            {/* Inserisci qui le routes */}
                            <Route path="/" element={
                                <Home />
                            } />
                            <Route path="/products" element={
                                <Products />
                            } />
                            <Route path="/products/:id" element={
                                <ProductId />
                            } />
                            <Route path="/cart" element={
                                <Cart />
                            } />
                            <Route path="/about" element={
                                <About />
                            } />
                            <Route path="/contatti" element={
                                <Contatti />
                            } />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
};