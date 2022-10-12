import React from 'react';
import {Box, Button, Card, CardActionArea, CardContent, Typography} from '@mui/material';
import styleCard from './card.module.scss';

const CardProducts = ({name_product, image, price, freeShopping}) => {
    return (
        <Card sx={{m:1}}>
            <CardActionArea>
                <CardContent>
                    <Box>
                        <Typography variant="body1">{name_product}</Typography>
                    </Box>
                    <Box>
                        <img className={styleCard.img_card} src={image} alt={'img-card'}/>
                    </Box>
                </CardContent>
            </CardActionArea>
                    <Box>
                        {
                            freeShopping?
                                <span>Envio gratis</span>:
                                <span>Costo de envio</span>
                        }
                    </Box>
                    <Box>
                        <Typography variant="body1">{`Precio: ${price}.000`}</Typography>
                    </Box>
                    <Box sx={{display: 'none'}}>
                        <Button sx={{width: 320}} variant="outlined" color="success">Agregar</Button>
                    </Box>
        </Card>
    );
};

export default CardProducts;