// import axios from "axios";
import ProductsList from '../../Array/Products'
export const productListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: 'PRODUCT_LIST_REQUEST',
        })
        // const { data } = await axios.get("url");
        const data = ProductsList;
        dispatch({
            type: 'PRODUCT_LIST_SUCCESS',
            payload: data
        })
    } catch (err) {
        console.error(err);
    }
}