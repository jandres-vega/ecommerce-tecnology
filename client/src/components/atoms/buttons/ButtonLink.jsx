import React from 'react';
import {Button} from "@mui/material";

const ButtonLink = ({item}) => {
    return (
        <Button href="#text-buttons" sx={{
            color : 'white',
            transition: '5e35b1'
        }}>{item}</Button>
    );
};

export {ButtonLink};