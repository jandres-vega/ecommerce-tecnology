import React from 'react';
import sidbarStyle from './sidbarCategories.module.scss';

const SidebarCategories = ({category}) => {
    return (
        <div className={sidbarStyle.categories}>
            <div className={sidbarStyle.title_categorie}>
                <h2>Todas las categorias</h2>
            </div>
            <div className={sidbarStyle.items_categories}>
                {
                    category.map(item => (
                        <span key={item.id}>{item.name_category}</span>
                    ))
                }
            </div>
        </div>
    );
};

export default SidebarCategories;