import React from 'react';
import {useDispatch} from 'react-redux'
import styleFilterProducts from './navFilterProducts.module.scss';
import {getProductsOrderByName} from '../../../redux/actions/actions';

const NavFilterProducts = ({category}) => {
    console.log(category)
    const dispatch = useDispatch();
    const handleOrderProducts = (e) => {
        dispatch(getProductsOrderByName(e.target.value))
    }
    return (
        <div className={styleFilterProducts.container_filters}>
            <div className={styleFilterProducts.tittle_categories}>
                {
                    category.length === 0?
                        <h1>Todos los productos</h1>:
                        <h1>{category}</h1>
                }
            </div>
            <div className={styleFilterProducts.options_filter}>
                <select onChange={(e) => handleOrderProducts(e)}>
                    <option>Ordenar por </option>
                    <option value="popular">Mas popular </option>
                    <option value="Min-Max">Precio (bajo - alto) </option>
                    <option value="Max-Min">Precio (alto - bajo) </option>
                    <option value="A-Z">Nombre (A - Z) </option>
                    <option value="Z-A">Nombre (Z - A) </option>
                </select>
            </div>
        </div>
    );
};

export default NavFilterProducts;