import { PRODUCT_LIST } from "../_actions/types";

const initialState = {
    productList: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload.data
            }

        default:
        return state;
    }
}

export default productReducer;