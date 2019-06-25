import "../../assets/styles/react-big-calendar.css";
import React, { useContext, useEffect, useState } from "react";
import BigCalendar from "react-big-calendar";
// import dates from "./dates";
import { BpowerEvents } from "./bpower-events-context";
import { getToken } from "../../api/api";
import axios from "axios";
import _ from "lodash";

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const CalendarConfig = ({ localizer }) => {
    const context = useContext(BpowerEvents);
    const [events, setEvents] = useState([]);
    const [eventsCategories, setEventsCategories] = useState([]);
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
                        obj[`event_${color.option_name}`] = color.option_value;
                        return null;
                    });
                    setEventColors(obj);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }, []);

    useEffect(() => {
        setEvents(context.events);

        const arr = [];
        context.events.map(event => {
            return arr.push(event.type);
        });

        setEventsCategories(_.uniq(arr));
    }, [context.events]);

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

    const filterCalendarEvents = category => {
        const arr = [];
        if (category === "Open this select menu") {
            return setEvents(context.events);
        }
        context.events.map(event => {
            return event.type === category ? arr.push(event) : null;
        });

        setEvents(arr);
    };
    return (
        <>
            <select
                className="custom-select"
                onChange={e => filterCalendarEvents(e.target.value)}
            >
                <option defaultValue="reset">Open this select menu</option>
                {eventsCategories.map((category, index) => {
                    switch (category) {
                        case "30003076":
                            return (
                                <option key={index} value={category}>
                                    Adventures
                                </option>
                            );
                        case "30003077":
                            return (
                                <option key={index} value={category}>
                                    Motorcycle tours
                                </option>
                            );
                        case "30003078":
                            return (
                                <option key={index} value={category}>
                                    Hotels
                                </option>
                            );

                        default:
                            return null;
                    }
                })}
            </select>
            <BigCalendar
                popup
                events={events}
                views={allViews}
                step={60}
                defaultDate={new Date()}
                localizer={localizer}
                onSelectEvent={event => redirectCalendar(event)}
                messages={context.messages}
                // culture={"pl-PL"}
                eventPropGetter={eventTypeColor}
            />
        </>
    );
};

export default CalendarConfig;
