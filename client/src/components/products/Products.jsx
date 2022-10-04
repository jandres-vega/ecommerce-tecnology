import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategories, getAllProducts} from '../../redux/actions/actions';
import SidebarCategories from '../sidbarCategories/SidebarCategories';
import NavFilterProducts from '../../components/navFilterProducts/NavFilterProducts';
import CardProducts from '../CardProducts/CardProducts';
import styleProducts from './product.module.scss'

const Products = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const products = useSelector(state => state.products);
    console.log (products)
    
    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllProducts())
    }, []);
    return (
        <div className={styleProducts.section_products}>
            <div className={styleProducts.sidebar}>
                <SidebarCategories category={categories}/>
            </div>
            <div className={styleProducts.main_products}>
                <NavFilterProducts />
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