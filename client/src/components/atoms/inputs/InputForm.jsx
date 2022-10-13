import React from 'react';
import { Box, TextField } from '@mui/material';

const InputForm = ( { text, name, addInput } ) => {
    
    
    const handleInput = ( e ) => {
        addInput(e.target.value, e.target.name)
    }
    
    return (
        <Box sx={{
            maxWidth : '100%', m : 2, textAlign : 'flex-end'
        }}>
            <TextField name={name} onChange={handleInput} fullWidth id="outlined-basic" label={text}
                       variant="outlined"/>
        </Box>
    
    );
};

export { InputForm };