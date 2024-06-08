import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CartProductsProvider } from './contexts/selectedProduct';

export function App() {
    return (
        <CartProductsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </CartProductsProvider>
    );
}
