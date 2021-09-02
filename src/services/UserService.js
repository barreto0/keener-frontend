/* eslint-disable no-unused-vars */
const axios = require('axios');
import api from '../environment'
const url = `${api.url}/users`

export default {
    authUser (email, password) {
        const body = {
            email: email,
            password: password
        }
        return axios.post(`${url}/login`, body);
    },

    async registerUser (name, email, password) {
        const body = {
            name: name,
            email: email,
            password: password
        }
        await axios.post(`${url}/register`, body);
    }
}