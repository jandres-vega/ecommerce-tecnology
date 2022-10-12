import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategories, getAllProducts} from '../../redux/actions/actions';
import SidebarCategories from '../../components/organisms/sidbarCategories/SidebarCategories';
import NavFilterProducts from '../../components/organisms/navFilterProducts/NavFilterProducts';
import CardProducts from '../../components/organisms/cardProducts/CardProducts';
import styleProducts from './product.module.scss'

const Products = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const products = useSelector(state => state.products);
    
    const [category, setCategories] = useState('');
    
    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllProducts())
    }, []);
    
    const nameCategory = (name) => {
        setCategories(name)
    }
    return (
        <div className={styleProducts.section_products}>
            <div className={styleProducts.sidebar}>
                <SidebarCategories category={categories} nameCategory={(name) => nameCategory(name)}/>
            </div>
            <div className={styleProducts.main_products}>
                <NavFilterProducts
                    category={category}
                />
                <div className={styleProducts.cards}>
                    {
                        products.map(item => (
                            <CardProducts
                                key={item.id}
                                name_product={item.name_product}
                                image={item.image}
                                price={item.price}
                                freeShopping={item.freeShopping}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;