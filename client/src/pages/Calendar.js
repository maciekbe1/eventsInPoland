import React from "react";
import CalendarConfig from "../components/Calendar/CalendarConfig";
import moment from "moment";
import BigCalendar from "react-big-calendar";
import BpowerEventsStore from "../components/Calendar/bpower-events-context";
import "moment/locale/pl";
import "moment/locale/en-gb";

const localizer = BigCalendar.momentLocalizer(moment);

const CalendarLocalizer = () => {
    moment.locale("en-gb");
    return (
        <BpowerEventsStore>
            <CalendarConfig localizer={localizer} />
        </BpowerEventsStore>
    );
};

export default CalendarLocalizer;
