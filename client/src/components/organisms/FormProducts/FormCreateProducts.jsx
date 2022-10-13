import React from 'react';
import { Container, Grid } from '@mui/material';
import { InputForm } from '../../atoms/inputs/InputForm';
import { TextAreaForm } from '../../atoms/inputs/TextAreaForm';
import { SelectOptions } from '../../atoms/select/SelectOptions';
import { CheckBoxFree } from '../../atoms/checkbox/CheckBoxFree';
import { ButtonSend } from '../../atoms/buttons/ButtonSend';
import {createProduct} from '../../../redux/actions/actions'
import { useDispatch } from 'react-redux';

const FormCreateProducts = () => {
    
    const dispatch = useDispatch();
    
    const [ input, setInput ] = React.useState( {
        "name_product" : "",
        "description" : "",
        "image" : "",
        "stock" : "",
        "price" : "",
        "CategoryId" : ""
    });
    
    
    const inputValue = ( inputValue, name ) => {
        setInput( {
            ...input,
            [name] : inputValue
        } )
    }
    const textValue = (text, name) => {
        setInput({
            ...input,
            [name]: text
        })
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
        dispatch(createProduct(input))
    }
    
    return (
        <Container sx={{ width : 600, border : 1, borderRadius : 2 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs : 1, sm : 2, md : 3 }}>
                <Grid item xs={12} md={6}>
                    <InputForm text={'Nombre del producto'} name={'name_product'}
                               addInput={( valueInput, name ) => inputValue( valueInput, name )}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputForm text={'imagen'} name={'image'}
                               addInput={( valueInput, name ) => inputValue( valueInput, name )}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InputForm text={'price'} name={'price'}
                               addInput={( valueInput, name ) => inputValue( valueInput, name )}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <TextAreaForm text={'Descripcion'} name={'description'}
                                  addText={(text, name) => textValue(text, name)}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InputForm text={'Stock'} name={'stock'}
                               addInput={( valueInput, name ) => inputValue( valueInput, name )}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <SelectOptions handleIdCategory={(id) => handleId(id)}/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <CheckBoxFree free={"Envio gratis"} bool={(bol) => handleCheck(bol)}/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <ButtonSend text={"Enviar"} sendDate={handleSendDate} />
                </Grid>
            </Grid>
        </Container> );
};

export { FormCreateProducts };