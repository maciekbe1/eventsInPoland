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

export function getContentBpower(location) {
    let contentId;
    switch (location) {
        case "/about-us":
            contentId = 13;
            break;
        case "/news":
            contentId = 14;
            break;
        case 14:
            contentId = 14;
            break;
        case "/contact":
            contentId = 15;
            break;
        case 16: // footer
            contentId = 16;
            break;
        case 17: // navbar
            contentId = 17;
            break;
        default:
            contentId = null;
    }

    return axios
        .get(
            `https://b2ng.bpower2.com/index.php/restApi/common-posts/params/{"link_id": ${contentId}}/?pagination={"page":1,"itemsPerPage":1000}`
        )
        .then(res => {
            let obj = {};
            res.data.map(item => {
                obj["text_" + item.post.menu_order] = item.post.post_content;
                return null;
            });
            return obj;
        })
        .catch(error => {
            return console.log(error);
        });
}
