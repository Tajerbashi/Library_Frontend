import axios from "axios";
export const productListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: 'PRODUCT_LIST_REQUEST',
        })
        const { data } = await axios.get("url");
        dispatch({
            type: 'PRODUCT_LIST_SUCCESS',
            payload: data
        })
    } catch (err) {
        console.error(err);
    }
}