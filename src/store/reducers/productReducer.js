import {GET_CATEGORIES, GET_PRODUCTS, SAVE_PRODUCT} from "../actions/types";

const initialState = {
    products: [],
    categories: []
};

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            };
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            };
        case SAVE_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state;
    }
}