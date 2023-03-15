import React from 'react';
import styleCarrusel from './styleCarrusel.module.scss';
const CarruselHome = ({images_products}) => {
    
    return (
        <div className={styleCarrusel.div_carrusel}>
            {/*{*/}
            {/*    images_products.map(item => (*/}
            {/*        <img key={item.id} src={item.image} alt={'img_product'}/>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    );
};

export default CarruselHome;