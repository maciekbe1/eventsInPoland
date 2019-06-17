import "../../assets/styles/react-big-calendar.css";
import React, { useContext, useEffect, useState } from "react";
import BigCalendar from "react-big-calendar";
// import dates from "./dates";
import { BpowerEvents } from "./bpower-events-context";
import { getToken } from "../../api/api";
import axios from "axios";

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const CalendarConfig = ({ localizer }) => {
    const context = useContext(BpowerEvents);
    const [eventColors, setEventColors] = useState({});

    const redirectCalendar = props => {
        window.location.assign(`/all-events/event/${props.id}`);
    };

    useEffect(() => {
        getToken(process.env.REACT_APP_USER_DATA_KEY).then(res => {
            axios({
                method: "get",
                url:
                    "https://b2ng.bpower2.com/index.php/restApi/request/model/WwwOptions",
                headers: {
                    Authorization: res.data.token
                }
            })
                .then(res => {
                    let obj = {};
                    res.data.data.objects.map(color => {
                        console.log(color);
                        obj[`event_${color.option_name}`] = color.option_value;
                        return null;
                    });
                    setEventColors(obj);
                    console.log(obj);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }, []);

    const eventTypeColor = (event, start, end) => {
        if (end < new Date()) {
            return {
                className: "unavbiable",
                style: {
                    backgroundColor: "grey",
                    opacity: 0.5
                }
            };
        }

        switch (event.type) {
            case "30003076":
                return {
                    className: "adventures",
                    style: {
                        backgroundColor: eventColors.event_30003076
                    }
                };
            case "30003077":
                return {
                    className: "motorcycle-tours",
                    style: {
                        backgroundColor: eventColors.event_30003077
                    }
                };
            case "30003078":
                return {
                    className: "hotels",
                    style: {
                        backgroundColor: eventColors.event_30003078
                    }
                };
            default:
                return {};
        }
    };

    return (
        <BigCalendar
            popup
            events={context.events}
            views={allViews}
            step={60}
            defaultDate={new Date()}
            localizer={localizer}
            onSelectEvent={event => redirectCalendar(event)}
            messages={context.messages}
            // culture={"pl-PL"}
            eventPropGetter={eventTypeColor}
        />
    );
};

export default CalendarConfig;
