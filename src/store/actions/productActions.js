import {GET_CATEGORIES, GET_PRODUCTS, SAVE_PRODUCT} from './types';
import axios from 'axios';

export const getProducts = () => dispatch => {
    axios.get('/api/products')
         .then(response => {
            dispatch({
                type: GET_PRODUCTS,
                payload: response.data
            })
         })
        .catch(err => console.log(err))
};

export const getCategories = () => dispatch => {
    axios.get('/api/category')
        .then(response => {
            dispatch({
                type: GET_CATEGORIES,
                payload: response.data
            })
        })
        .catch(error => console.log(error));
};

export const saveProduct = (product) => dispatch => {
    const formData = new FormData();

    Object.keys(product).map(key => {
        formData.append([key], product[key])
    });

    console.log(formData);

    axios.post('api/products', formData, {
        headers: {
            "Content-Type": undefined,
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg3MTYwMzc2LCJqdGkiOiJjYmEyMDgxY2U1MTk0ZTg5OWNhZjc1MmMxZjQ0NDc4MSIsInVzZXJfaWQiOjF9.r6vkwG5puUn56Jhda11PTqyaVR5jo52RT9Klo_M-QkE"
        }
    })
         .then(response => {
            dispatch({
                type: SAVE_PRODUCT,
                payload: response.data
            })
         })
        .catch(error => console.log(error))


};