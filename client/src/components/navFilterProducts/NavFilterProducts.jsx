import React from 'react';
import styleFilterProducts from './navFilterProducts.module.scss';

const NavFilterProducts = () => {
    return (
        <div className={styleFilterProducts.container_filters}>
            <div className={styleFilterProducts.tittle_categories}>
                <h1>Todos las categorias</h1>
            </div>
            <div className={styleFilterProducts.options_filter}>
                <select>
                    <option>Ordenar por </option>
                    <option>Mas popular </option>
                    <option>Precio (bajo - alto) </option>
                    <option>Precio (alto - bajo) </option>
                    <option>Nombre (A - Z) </option>
                    <option>Nombre (Z - A) </option>
                </select>
            </div>
        </div>
    );
};

export default NavFilterProducts;