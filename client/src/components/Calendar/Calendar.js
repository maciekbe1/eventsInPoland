import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/calendar.scss";
import CalendarView from "./CalendarView";

const Calendar = () => {
    return (
        <>
            <div className="container calendar-page">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-2">
                        <div className="container d-flex flex-wrap">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Calendar
                            </li>
                        </div>
                    </ol>
                </nav>
                <div className="calendar-banner d-flex align-items-end mb-5">
                    <div className="calendar-search d-flex align-items-center justify-content-center">
                        <div className="col-sm-5 text-center">
                            <h1>Calendar</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <CalendarView />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Calendar;
