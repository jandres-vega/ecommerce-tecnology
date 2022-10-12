import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const CheckBoxFree = ({free}) => {
    return (
        <Box sx={{m:2}}>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked/>} label={free}/>
            </FormGroup>
        </Box>
    );
};

export { CheckBoxFree };