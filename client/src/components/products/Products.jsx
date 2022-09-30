import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategories, getAllProducts} from '../../redux/actions/actions';
import SidebarCategories from '../sidbarCategories/SidebarCategories';
import NavFilterProducts from '../../components/navFilterProducts/NavFilterProducts';
import styleProducts from './product.module.scss'

const Products = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const products = useSelector(state => state.products);
    
    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllProducts())
    }, []);
    return (
        <div className={styleProducts.main_products}>
            <SidebarCategories category={categories}/>
            <NavFilterProducts />
        </div>
    );
};

export default Products;