import React from 'react';
import {Item} from '../atoms/items/Item';
import {MenuItem} from "@mui/material";
import {Link} from "react-router-dom";


const ListMenu = ({list, handleClose}) => {
    let cont = 0
    return (
        <React.Fragment>
            {
                list.map((item) => (
                    list[0].hasOwnProperty('to') ?
                    <MenuItem key={item.a} onClick={handleClose}>
                        <Link to={item.to} style={{textDecoration: 'none', color: 'black', transition: "inherit"}}>
                            <Item item={item.a} />
                        </Link>
                    </MenuItem>:
                        <MenuItem key={cont++}>{item}</MenuItem>
                ))
            }
        </React.Fragment>
    );
};

export {ListMenu};