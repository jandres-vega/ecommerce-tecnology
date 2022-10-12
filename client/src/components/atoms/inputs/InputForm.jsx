import React from 'react';
import { Box, TextField } from '@mui/material';

const InputForm = ({text}) => {
    return (
        <Box sx={{
            maxWidth: '100%', m: 2, textAlign: 'flex-end'}}>
            <TextField fullWidth id="outlined-basic" label={text} variant="outlined"  />
        </Box>
        
    );
};

export { InputForm };