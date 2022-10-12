import React from 'react';
import { Box, TextareaAutosize } from '@mui/material';

const TextAreaForm = ({ text }) => {
    return (
        <Box sx={{ maxWidth: '100%', m: 2}}>
            <TextareaAutosize
                aria-label="empty textarea"
                placeholder={text}
                style={{width: 320, height: 45}}
            />
        </Box>
    );
};

export { TextAreaForm };