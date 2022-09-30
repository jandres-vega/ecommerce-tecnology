import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Header from '../components/header/Header';
import Products from '../components/products/Products';

const App = () => {
    return (
        <>
            <HashRouter>
                <Header />
                <Routes>
                    <Route exact path="/" />
                    <Route exact path="/products" element={<Products />} />
                    <Route path="*" element={<p>Not Found</p>} />
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;

