import React from 'react';
import {Typography} from "@mui/material";

const Item = ({item}) => {
    return (
        <Typography textAlign={'center'} sx={{fontSize: 20}}>
            {item}
        </Typography>
    );
};

export {Item};