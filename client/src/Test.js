import React from 'react'
import axios from 'axios'

class Test extends React.Component {

    componentDidMount() {
        const get = `https://qang.bpower2.com/index.php/restApi/gwip-events`;
        const post = 'https://qang.bpower2.com/index.php/restApi/generateJWT';
        const userData = "YWRtaW46ODVmZDdjODg5ZjcxY2YxMDUzNzU1OTVjZGRjMDZiOWQzOGZjNTYyY2I2OWM1NGY4YzE2NWFhNzUxZDgxYjNkOQ==";
        axios.get(get).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        });

        axios.post(post, {
            headers: {
                'X-PINGOTHER': 'pingpong',
                'Content-Type': 'application/json'
            },
            data: {
                "user-key": userData
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                Przerwa techniczna...
            </div>
        )
    }
}

export default Test