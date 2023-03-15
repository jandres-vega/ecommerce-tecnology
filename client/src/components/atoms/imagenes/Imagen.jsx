import React from 'react';
import {Box} from "@mui/material";
import styleImg from './img.module.scss';

const Imagen = ({img}) => {
    return (
        <Box sx={{width: 100, height: 100}}>
            <img className={styleImg.img_logo} src={img} alt={'img-log'} />
        </Box>
    );
};

export {Imagen};