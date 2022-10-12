import React from 'react';
import { useDispatch } from 'react-redux'
import { filterByCategories } from '../../../redux/actions/actions'
import { getAllProducts } from '../../../redux/actions/actions';
import sidbarStyle from './sidbarCategories.module.scss';

const SidebarCategories = ( { category, nameCategory } ) => {
    
    const dispatch = useDispatch();
    const handleCategories = ( id, name ) => {
        dispatch( filterByCategories( id ) );
        nameCategory( name )
    }
    const allProducts = () => {
        dispatch( getAllProducts() )
    }
    return (
        <div className={sidbarStyle.categories}>
            <div className={sidbarStyle.title_categorie}>
                <h2 onClick={allProducts}>Todos los productos</h2>
            </div>
            <div className={sidbarStyle.items_categories}>
                {
                    category.map( item => (
                        <span onClick={() => handleCategories( item.id, item.name_category )}
                              key={item.id}>{item.name_category}
                        </span>
                    ) )
                }
            </div>
        </div>
    );
};

export default SidebarCategories;