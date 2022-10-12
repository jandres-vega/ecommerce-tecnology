import React from 'react';
import { Box, Button } from '@mui/material';

const ButtonSend = ({ text }) => {
    return (
        <Box sx={{m: 2, width: 500, maxWidth: '100%'}}>
            <Button variant="contained" fullWidth>
                {text}
            </Button>
        </Box>
    );
};

export {ButtonSend};