import axios from 'axios';

export function getAllCategories (){
    return async ( dispatch ) => {
        let dataJson = await axios.get ('http://localhost:3001/categories');
        return dispatch ({
            type: 'GET_CATEGORIES',
            payload: dataJson.data
        })
    }
}

export function getAllProducts () {
    return async (dispatch) => {
        let dataJson = await axios.get('http://localhost:3001/products');
        return dispatch ({
            type: 'GET_ALL_PRODUCTS',
            payload: dataJson.data
        })
    }
}