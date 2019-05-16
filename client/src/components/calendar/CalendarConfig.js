import "../../assets/styles/react-big-calendar.css";
import React, { useContext } from "react";
import BigCalendar from "react-big-calendar";
// import dates from "./dates";
import { BpowerEvents } from "./bpower-events-context";

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const CalendarConfig = ({ localizer }) => {
    const context = useContext(BpowerEvents);

    // const handleSelect = ({ start, end }) => {
    //     const title = window.prompt("New Event name");
    //     var newEnd = new Date(end);
    //     newEnd.setDate(newEnd.getDate() + 1);
    //     if (title) {
    //         setEvents([
    //             ...events,
    //             {
    //                 start,
    //                 end,
    //                 title
    //             }
    //         ]);
    //     }
    // };

    return (
        <BigCalendar
            popup
            // selectable --- odpowiada za zaznaczenia
            events={context.events}
            views={allViews}
            step={60}
            defaultDate={new Date()}
            localizer={localizer}
            onSelectEvent={event => alert(event.title)}
            // onSelectSlot={handleSelect} --- odpowiada za dodawnie eventów do kalendarza, potrzebny pros selectable
            messages={context.messages}
            // culture={"pl-PL"}
        />
    );
};

export default CalendarConfig;
