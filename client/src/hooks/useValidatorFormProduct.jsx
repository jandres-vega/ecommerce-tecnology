import React from 'react';
import {useDispatch} from "react-redux";
import {createProduct} from "../redux/actions/actions";

const useValidatorFormProduct = (initialForm, validateForm) => {

    const [input, setInput] = React.useState(initialForm);
    const [errors, setErrors] = React.useState({});

    const dispatch = useDispatch();

    const inputValue = ( inputValue, name ) => {
        setInput( {
            ...input,
            [name] : inputValue
        } )
    }

    const handleCheck = (bol) => {
        setInput({
            ...input,
            "freeShopping": bol
        })
    }

    const handleId = (id) => {
        setInput({
            ...input,
            "CategoryId": Number(id)
        })
    }
    const handleSendDate = () => {
        if(Object.keys(errors).length === 0) {
            dispatch(createProduct(input));
        }
        setErrors(validateForm(input));
    }
    return {
        inputValue,
        handleCheck,
        handleId,
        handleSendDate,
        errors
    }


};

export {useValidatorFormProduct};