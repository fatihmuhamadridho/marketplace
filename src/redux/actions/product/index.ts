import { ERROR, PRODUCT_ACTION, GET_PRODUCTS } from "../../types/products";
import axios from "axios";

export const getAllProducts = () => async(dispatch: any) => {
    try {
        dispatch({ type: PRODUCT_ACTION })
        const res = await axios.get('https://fakestoreapi.com/products');
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
        console.log('data', res.data.data)
    } catch (error: any) {
        dispatch({
            type: ERROR,
            payload: error
        })
        console.log(error)
    }
}