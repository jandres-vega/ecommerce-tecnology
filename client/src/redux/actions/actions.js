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

export function getProductsOrderByName (orderValue) {
    
    return async (dispatch) => {
        let dataJson = await axios.get(`http://localhost:3001/products/orders/${orderValue}`);
        return dispatch ({
            type: 'GET_PRODUCTS_ORDER_BY_NAME',
            orderValue,
            payload: dataJson.data
        })
    }
}

export function filterByCategories(id) {
    return async (dispatch) => {
        let dataJson = await axios.get(`http://localhost:3001/categories/${id}`);
        return dispatch({
            type: 'GET_CATEGORIES_BY_ID',
            payload: dataJson.data
        })
    }
}

export function getProductByName (name_product) {
    
    return async (dispatch) => {
        let dataJson = (await axios.get (`http://localhost:3001/products?name_product=${name_product}`)).data
        return dispatch({
            type: 'GET_PRODUCT_BY_NAME',
            payload: dataJson
        })
    }
}
export function createProduct(payload) {
    return async function () {
        return await axios.post('http://localhost:3001/products', payload)
    }
}