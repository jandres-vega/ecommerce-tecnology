import React from 'react';
import { Box, Button } from '@mui/material';

const ButtonSend = ({ text, sendDate }) => {
    
    const handleSend = () => {
        sendDate()
    }
    
    return (
        <Box sx={{m: 2, width: 500, maxWidth: '100%'}}>
            <Button variant="contained" fullWidth onClick={handleSend}>
                {text}
            </Button>
        </Box>
    );
};

export {ButtonSend};