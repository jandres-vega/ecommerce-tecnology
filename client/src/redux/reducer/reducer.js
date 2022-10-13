const initialState = {
    categories: [],
    products: [],
    allCopyProducts: []
}

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                allCopyProducts: action.payload
            }
        case 'GET_PRODUCTS_ORDER_BY_NAME':
            return {
                ...state,
                products: action.payload
            }
        case 'GET_CATEGORIES_BY_ID':
            return {
                ...state,
                products: action.payload
            }
        case 'GET_PRODUCT_BY_NAME':
            return {
                ...state,
                products: action.payload
            }
        case 'POST_PRODUCT':
            return {
                ...state
            }
        default :
            return state
    }

}

export default rootReducer;