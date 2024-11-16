import axios from "axios";

const baseURL = 'http://localhost:8085/userActivity';

export const addToWithList = async (userId, productId) => {
    try {
        const response = await axios.get(`${baseURL}/addWishList/${userId}/${productId}`, {});
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const addToCartList = async (userId, productId) => {
    try {
        const response = await axios.get(`${baseURL}/addCartList/${userId}/${productId}`, {});
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getWishList = async (userId) => {
    try {
        const response = await axios.get(`${baseURL}/getWishList/${userId}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getCartList = async (userId) => {
    try {
        const response = await axios.get(`${baseURL}/getCartList/${userId}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}