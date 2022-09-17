// add items to cart
export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item,
    }
};

//delete item from cart
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id,
    }
}

// remove one by one
export const REMOVE = (item) => {
    return {
        type: "RMV_ONE",
        payload: item
    }
}
