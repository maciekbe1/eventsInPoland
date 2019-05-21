import axios from "axios";

export const getToken = async userData => {
    return await axios({
        method: "post",
        url: process.env.REACT_APP_GENERATE_AUTH_KEY,
        headers: {
            "Content-Type": "application/json",
            "X-PINGOTHER": "pingpong"
        },
        data: {
            "user-key": userData
        }
    });
};
export function getEventsName() {
    let arr = [];
    getToken(process.env.REACT_APP_USER_DATA_KEY).then(res => {
        axios({
            method: "get",
            url: process.env.REACT_APP_EVENTS,
            headers: {
                Authorization: res.data.token
            }
        })
            .then(res => {
                res.data.data.objects.map(event => {
                    arr.push(event.title);
                    return null;
                });
            })
            .catch(error => {
                console.log(error);
            });
    });
    return arr;
}
