import React from 'react';
import { Box, IconButton } from '@mui/material';

const ButtonIcon = ({listIcon, handleOpen}) => {
    let cont = 0
    return (
        <React.Fragment>
            {
                listIcon.map(icon => (
                    <IconButton onClick={handleOpen} key={cont++}>
                        {icon}
                    </IconButton>
                ))
            }
        </React.Fragment>
    );
};

export {ButtonIcon};