import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/organisms/header/Header';
import Products from '../pages/products/Products';
import NotFound from '../pages/notFound/NotFound';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import { FormCreateProducts } from '../components/organisms/FormProducts/FormCreateProducts';

const App = () => {
    return (
        <>
            <HashRouter>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/products" element={<Products/>}/>
                    <Route exact path="/about-me" element={<About/>}/>
                    <Route exact path="/Contact-me" element={<Contact/>}/>
                    <Route  exact path="/create-product" element={<FormCreateProducts />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;

