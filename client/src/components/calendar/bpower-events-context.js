import React, { useState, useEffect } from "react";

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
        fetch(
            `https://content.googleapis.com/calendar/v3/calendars/4neq3fml6jsi84ea7gmfnfqtt8@group.calendar.google.com/events?key=AIzaSyDeLoAUSL4bt11qgzmyWhYZuClsvgZMoCc`
        )
            .then(res => res.json())
            .then(res => {
                const arr = [];
                res.items.map(item => {
                    if (item.start.date) {
                        arr.push({
                            id: item.id,
                            start: convertDate(item.start.date, null),
                            end: convertDate(null, item.end.date),
                            title: item.summary
                        });
                    } else {
                        arr.push({
                            id: item.id,
                            start: convertDate(item.start.dateTime),
                            end: convertDate(item.end.dateTime),
                            title: item.summary
                        });
                    }
                    return null;
                });
                setEvents(arr);
            });
    }, []);

    const convertDate = (start, end) => {
        const date = new Date(start ? start : end);
        const year = date.getFullYear();
        const month = date.getMonth();
        let day = null;
        if (start) {
            day = date.getDate();
        } else {
            day = date.getDate() - 1;
        }
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const miliseconds = date.getMilliseconds();

        const newDate = new Date(
            year,
            month,
            day,
            hours,
            minutes,
            seconds,
            miliseconds
        );

        return newDate;
    };

    return (
        <BpowerEvents.Provider value={{ messages, events }}>
            {props.children}
        </BpowerEvents.Provider>
    );
};

export default BpowerEventsStore;
