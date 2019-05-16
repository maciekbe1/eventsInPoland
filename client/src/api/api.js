import axios from "axios";

export function getToken(userData) {    
    return axios({
        method: 'post',
        url: process.env.REACT_APP_GENERATE_AUTH_KEY,
        headers: {
            'Content-Type': 'application/json',
            'X-PINGOTHER': 'pingpong'
        },
        data: {
            "user-key": userData
        }
    })
};