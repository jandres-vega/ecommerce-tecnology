import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import {InputForm} from '../../atoms/inputs/InputForm';
import { TextAreaForm } from '../../atoms/inputs/TextAreaForm';
import { SelectOptions } from '../../atoms/select/SelectOptions';
import { CheckBoxFree } from '../../atoms/checkbox/CheckBoxFree';
import { ButtonSend } from '../../atoms/buttons/ButtonSend';
const FormCreateProducts = () => {
    
    return (
        <Container sx={{width: 600, border: 1, borderRadius: 2}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={12} md={6}>
                    <InputForm text={'Nombre del producto'} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputForm text={'imagen'} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InputForm text={'price'} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <TextAreaForm text={'Descripcion'} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InputForm text={'Stock'} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <SelectOptions />
                </Grid>
                <Grid item xs={12} md={12}>
                    <CheckBoxFree free={"Envio gratis"} />
                </Grid>
                <Grid item xs={12} md={12}>
                    <ButtonSend text={"Enviar"} />
                </Grid>
            </Grid>
        </Container>
    );
};

export {FormCreateProducts};