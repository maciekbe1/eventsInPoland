import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../api/api";
import parse from 'html-react-parser';
import { dateConverter } from "../../containers/date"

const Event = props => {
    const [event, setEvent] = useState();
    const [image, setImage] =useState()
    useEffect(() => {
        getToken(process.env.REACT_APP_USER_DATA_KEY).then(res => {
            function getUserAccount() {
                axios({
                    method: "get",
                    url: `https://b2ng.bpower2.com/index.php/restApi/request/model/SzanseSprzedazy/params/{"pipeline":13, "id": ${
                        props.match.params.event
                    }}`,
                    headers: {
                        Authorization: res.data.token
                    }
                });
            }
 
            function getUserPermissions() {
                return axios({
                    method: "get",
                    url: `https://b2ng.bpower2.com/index.php/restApi/request/model/SzanseSprzedazyDane/params/{"spd_id_sp": ${
                        props.match.params.event
                    }}`,
                    headers: {
                        Authorization: res.data.token
                    }
                });
            }
            axios.all([getUserAccount(), getUserPermissions()]).then(
                axios.spread(function(acct, perms) {
                    perms.data.data.objects.map(item => {
                        if (item.text_value.indexOf("<img") === 0) {
                            setImage(item.text_value)
                        }
                        return null
                    });
                })
            );
            axios({
                method: "get",
                url: `https://b2ng.bpower2.com/index.php/restApi/request/model/SzanseSprzedazy/params/{"pipeline":13, "id": ${
                    props.match.params.event
                }}`,
                headers: {
                    Authorization: res.data.token
                }
            })
                .then(res => {
                    setEvent(res.data.data.objects[0]);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }, []);

    let content = "";
    if (event) {
        content = (
            <div>
                <h2>{event.title}</h2>
                <p>date start: {dateConverter(event.from_date)}</p>
                <p>date end: {dateConverter(event.to_date)}</p>
                <div className="mw-100 event-image">{parse(`${image}`)}</div>
            </div>
        );
    } else {
        return null;
    }
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <div className="container d-flex flex-wrap">
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/all-events">All Events</Link>
                        </li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            {event ? event.title : null}
                        </li>
                    </div>
                </ul>
            </nav>
            <div className="container event-subpage">{content}</div>
        </div>
    );
};
export default Event;
