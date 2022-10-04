import React from 'react';
import styleCard from './card.module.scss';

const CardProducts = ({name_product, image, price, freeShopping}) => {
    return (
        <div className={styleCard.card}>
            <h3>{name_product}</h3>
            <div className={styleCard.container_img}>
                <img src={image} alt="img-product" />
            </div>
            <div className={styleCard.div_send}>
                {
                    freeShopping?
                        <span>Envio gratis</span>:
                        <span>Costo de envio</span>
                }
            </div>
            <div className={styleCard.div_price}>
                <span>{`Precio: ${price}.000`}</span>
            </div>
        </div>
    );
};

export default CardProducts;