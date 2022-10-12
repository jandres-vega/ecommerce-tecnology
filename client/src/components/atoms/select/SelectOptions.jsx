import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectOptions = () => {

    return (
        <Box sx={{m:2}}>
            <FormControl variant="filled" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Categorias</InputLabel>
                <Select sx={{width: 320}} >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Item 1</MenuItem>
                    <MenuItem value={20}>Item 2</MenuItem>
                    <MenuItem value={30}>Item 3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export {SelectOptions};