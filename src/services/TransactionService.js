/* eslint-disable no-unused-vars */
const axios = require('axios');
import api from '../environment';
const url = `${api.devURL}/transactions`;
const token = localStorage.getItem('token');

export default {
    getTransactions(filter) {
        return axios.post(`${url}`, filter, { headers: {"Authorization" : token} });
    },

    registerTransaction(transaction) {
        return axios.post(`${url}/register`, transaction, { headers: {"Authorization" : token} });
    }
}