import React, { useEffect } from 'react';
import {getAllProducts} from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import CarruselHome from '../../components/organisms/carruselHome/CarruselHome';
import {InputForm} from '../../components/atoms/inputs/InputForm';
import { TextAreaForm } from '../../components/atoms/inputs/TextAreaForm';
import {ButtonSend} from '../../components/atoms/buttons/ButtonSend';
import { SelectOptions } from '../../components/atoms/select/SelectOptions';
import { CheckBoxFree } from '../../components/atoms/checkbox/CheckBoxFree';
const Home = () => {
    const dispatch = useDispatch();
    const products= useSelector(state => state.products);
    
    useEffect(() => {
        dispatch(getAllProducts());
    }, [])
    
    const images_products = products.map(item => {
        return {
            id : item.id,
            image : item.image
        }
    })
    
    return (
        <div>
            {/*<InputForm text={'nombre producto'}/>*/}
            {/*<TextAreaForm text={'Descripcion'} />*/}
            {/*<ButtonSend text={'Enviar'}/>*/}
            {/*<SelectOptions />*/}
            {/*<CheckBoxFree free={'Envio gratis'}/>*/}
            <CarruselHome
                images_products={images_products}
            />
        </div>
    );
};

export default Home;