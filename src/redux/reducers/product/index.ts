import { ERROR, PRODUCT_ACTION, GET_PRODUCTS } from "../../types/products";

const initialState = {
    products: [],
    isSuccess: false,
    isError: false,
    error: null
}

const product = (state = initialState, action: any) => {
    switch (action.type) {
        case PRODUCT_ACTION:
            return {
                ...state,
                isSuccess: false,
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                isSuccess: true
            }
        case ERROR:
            return {
                ...state,
                isError: true,
                error: action.payload
            }
        default:
            return { ...state }
    }
}

export default product;