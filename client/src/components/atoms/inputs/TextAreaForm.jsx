import React from 'react';
import { Box, TextareaAutosize } from '@mui/material';

const TextAreaForm = ({ text, name, addText }) => {
    
    const handleChange = (e) => {
        addText(e.target.value, e.target.name)
    }
    
    return (
        <Box sx={{ maxWidth: '100%', m: 2}}>
            <TextareaAutosize
                name={name}
                aria-label="empty textarea"
                placeholder={text}
                style={{width: 320, height: 45}}
                onChange={handleChange}
            />
        </Box>
    );
};

export { TextAreaForm };