import ProductsList from '../../Array/Products'
export const addToCart = (id) => async (dispatch, getState) => {
    const data = ProductsList.find(item => item._id == id);

    dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price
        }
    });
    // localStorage.setItem("cartItems", JSON.stringify(data));
    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
    );
}

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: 'CART_REMOVE_ITEM',
        payload: id
    });
    // localStorage.setItem("cartItems", JSON.stringify(data));
    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
    );
}