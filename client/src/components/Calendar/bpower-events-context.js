import React, { useState, useEffect } from "react";
import { getToken } from "../../api/api";
import axios from "axios";
import moment from "moment";

export const BpowerEvents = React.createContext();
// kontekst do usunięcia po wprowadzeniu danych z bp przeniesienie koniguracji do CalendarConfig

const BpowerEventsStore = props => {
    const [events, setEvents] = useState([]);
    const [messages] = useState({
        // allDay: "Cały dzień",
        // previous: "Wstecz",
        // next: "Dalej",
        // today: "Dzisiaj",
        // month: "Miesiąc",
        // week: "Tydzień",
        // work_week: "Tydzień pracy",
        // day: "Dzień",
        // agenda: "Agenda",
        // date: "Data",
        // time: "Godzina",
        // event: "Wydarzenie", // Or anything you want
        // showMore: total => `+ ${total} Dodatkowych wydarzeń`
    });

    useEffect(() => {
        getToken(process.env.REACT_APP_USER_DATA_KEY).then(res => {
            axios({
                method: "get",
                url: process.env.REACT_APP_EVENTS,
                headers: {
                    Authorization: res.data.token
                }
            }).then(res => {
                const arr = [];
                res.data.data.objects.map(event => {
                    arr.push({
                        id: event.id,
                        title: event.title,
                        start: moment(event.from_date)._d,
                        end: moment(event.to_date)._d
                    });
                    return null;
                });
                setEvents(arr);
            });
        });
    }, []);

    return (
        <BpowerEvents.Provider value={{ messages, events }}>
            {props.children}
        </BpowerEvents.Provider>
    );
};

export default BpowerEventsStore;
