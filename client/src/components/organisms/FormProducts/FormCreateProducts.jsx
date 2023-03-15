import React from 'react';
import {useValidatorFormProduct} from '../../../hooks/useValidatorFormProduct';
import {Box, Container, FormControl, FormHelperText, Grid} from '@mui/material';
import {InputForm} from '../../atoms/inputs/InputForm';
import {TextAreaForm} from '../../atoms/inputs/TextAreaForm';
import {SelectOptions} from '../../atoms/select/SelectOptions';
import {CheckBoxFree} from '../../atoms/checkbox/CheckBoxFree';
import {ButtonSend} from '../../atoms/buttons/ButtonSend';



let initialForm = {
    "name_product": "",
    "description": "",
    "image": "",
    "stock": "",
    "price": "",
    "CategoryId": ""
}

const validatorForm = (form) => {
    let errors = {}
    let URL = /^(ftp|http|https):\/\/[^ "]+$/;
    let rexPrice = /d{1,3}(?=(d{3})+(?!d))/;
    let number = /^[0-9]+$/;
    if(!form.name_product) errors.name_product = 'Ingrese el nombre del producto';
    if(!form.image) errors.image = 'Igresa una URL de imagen';
    else if(!URL.test(form.image)) errors.image = 'No es una URL de imagen';
    if(!form.price) errors.price = 'Ingrese el precio';
    // else if(!rexPrice.test(form.price)) errors.price = 'Ingrese un valor decimal';
    if(!form.stock) errors.stock = 'Ingrese una cantidad';
    else if(!number.test(form.stock)) errors.stock = 'Ingrese un valor numerico';
    if(!form.CategoryId) errors.CategoryId = 'Ingrese unca categoria';
    return errors
}

const FormCreateProducts = () => {

    const {
        inputValue,
        handleCheck,
        handleId,
        handleSendDate,
        errors
    } = useValidatorFormProduct(initialForm, validatorForm);

    return (
        <Container sx={{width: 600, border: 1, borderRadius: 2}}>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xs={12} md={6}>
                    <InputForm text={'Nombre del producto'} name={'name_product'} error={errors.name_product}
                               addInput={(valueInput, name) => inputValue(valueInput, name)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputForm text={'imagen'} name={'image'} error={errors.image}
                               addInput={(valueInput, name) => inputValue(valueInput, name)}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InputForm text={'price'} name={'price'} error={errors.price}
                               addInput={(valueInput, name) => inputValue(valueInput, name)}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <TextAreaForm text={'Descripcion'} name={'description'} error={errors.description}
                                  addText={(text, name) => inputValue(text, name)}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InputForm text={'Stock'} name={'stock'} error={errors.stock}
                               addInput={(valueInput, name) => inputValue(valueInput, name)}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <SelectOptions handleIdCategory={(id) => handleId(id)}/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <CheckBoxFree free={"Envio gratis"} bool={(bol) => handleCheck(bol)}/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <ButtonSend text={"Enviar"} sendDate={handleSendDate}/>
                </Grid>
            </Grid>
        </Container>);
};

export {FormCreateProducts};