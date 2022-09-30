const initialState = {
    categories: [],
    products: []
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
                products: action.payload
            }
        default :
            return state
    }

}

export default rootReducer;