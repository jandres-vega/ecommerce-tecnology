import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCategories } from '../../../redux/actions/actions';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectOptions = ({handleIdCategory}) => {
    
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    
    const [value, setValue] = React.useState('');
    
    const handleChange = (e) => {
        setValue(e.target.value)
        handleIdCategory(e.target.value)
    }
    React.useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);
    
    return (
        <Box sx={{m:2}}>
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-helper-label">Categorias</InputLabel>
                <Select label="Categorias" onChange={ handleChange } value={value}>
                    <MenuItem value="" >
                        <em>None</em>
                    </MenuItem>
                    {
                        categories.map(item => (
                            <MenuItem key={item.id} value={item.id}>{item.name_category}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
};
export {SelectOptions};

// {"name_category": item.name_category, id: item.id}