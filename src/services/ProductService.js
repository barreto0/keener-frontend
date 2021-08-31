/* eslint-disable no-unused-vars */
const axios = require('axios');
import api from '../environment';
const url = `${api.devURL}/products`;
const token = localStorage.getItem('token');

export default {
    getProducts(filter) {
        return axios.post(`${url}`, filter, { headers: {"Authorization" : token} });
    },

    registerProduct(product) {
        return axios.post(`${url}/register`, product, { headers: {"Authorization" : token} });
    },

    updateProduct(product) {
        return axios.put(`${url}`, product, { headers: {"Authorization" : token} });
    }
}