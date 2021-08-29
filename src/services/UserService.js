/* eslint-disable no-unused-vars */
const axios = require('axios');
import api from '../environment'
const url = `${api.devURL}/users`

export default {
    async authUser (email, password) {
        const body = {
            email: email,
            password: password
        }
        let success = false;
        await axios.post(`${url}/login`, body).then((res) => {
            const token = res.data.token;
            const userName = res.data.user.name;
            localStorage.setItem('token', token);
            localStorage.setItem('userName', userName);
            success = true;
        }, (err) => {
            console.log(err);
        });
        return success
    },

    async registerUser (name, email, password) {
        const body = {
            name: name,
            email: email,
            password: password
        }
        let success = {
            success: false,
            message: ''
        };
        await axios.post(`${url}/register`, body).then((res) => {        
            success.success = true
        }, (err) => {
            success.message = err.response.data.message
            console.log(err);
        });
        return success;
    }
}