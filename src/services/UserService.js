const axios = require('axios');
import api from '../environment'
const url = `${api.devURL}/users`

export default {
    authUser (email, password) {
        const body = {
            email: email,
            password: password
        }
        return axios.post(`${url}/login`, body);
    }
}