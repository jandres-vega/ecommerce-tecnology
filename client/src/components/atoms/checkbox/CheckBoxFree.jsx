import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const CheckBoxFree = ({free, bool}) => {
    
    const [check, setCheck] = React.useState(true);
    
    const handleChange = (e) => {
        if( !check ){
            setCheck( true );
            bool(check)
        }else {
            setCheck(!e.target.checked)
            bool(check)
        }
    }
    
    return (
        <Box sx={{m:2}}>
            <FormControlLabel control={ <Checkbox  onChange={handleChange} />} label={free} />
        </Box>
    );
};

export { CheckBoxFree };