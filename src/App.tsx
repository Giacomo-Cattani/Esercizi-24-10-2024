import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, Contatti, About } from './pages'

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