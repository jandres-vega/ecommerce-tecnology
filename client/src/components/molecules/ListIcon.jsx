import React from 'react';
import {ButtonIcon} from '../atoms/icons/ButtonIcon';

const ListIcon = ({icons, handleOpen}) => {
    
    return (
        <React.Fragment>
            <ButtonIcon listIcon={icons} handleOpen={handleOpen} />
        </React.Fragment>
    );
};

export {ListIcon};
