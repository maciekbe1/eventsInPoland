import "../../assets/styles/react-big-calendar.css";
import React, { useContext } from "react";
import BigCalendar from "react-big-calendar";
// import dates from "./dates";
import { BpowerEvents } from "./bpower-events-context";

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const CalendarConfig = ({ localizer }) => {
    const context = useContext(BpowerEvents);

    const redirectCalendar = props => {
        window.location.assign(`/all-events/event/${props.id}`);
    };

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
                        backgroundColor: "orange"
                    }
                };
            case "30003077":
                return {
                    className: "motorcycle-tours",
                    style: {
                        backgroundColor: "green"
                    }
                };
            case "30003078":
                return {
                    className: "hotels",
                    style: {
                        backgroundColor: "purple"
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
