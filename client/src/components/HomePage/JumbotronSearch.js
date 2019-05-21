import React, { useContext } from "react";
import Context from "../../context";
import Autocomplete from "./Autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const JumbotronSearch = () => {
    const context = useContext(Context);
    const { dispatch } = useContext(Context);

    const handleChangeStart = date => {
        dispatch({ type: "START_EVENT_DATE", payload: date });
    };
    const handleChangeEnd = date => {
        dispatch({ type: "END_EVENT_DATE", payload: date });
    };
    return (
        <div className="jumbotron-search d-flex align-items-center container-fluid">
            <div className="container col-sm-5 text-center">
                <h2>Find an event</h2>
                <label htmlFor="search-by-procedure">I am looking for</label>
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <p className="my-1">from:</p>
                        <DatePicker
                            dropdownMode={"scroll"}
                            selected={context.state.startEventDate}
                            selectsStart
                            startDate={context.state.startEventDate}
                            endDate={context.state.endEventDate}
                            onChange={handleChangeStart}
                            placeholderText="Click to select start date"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="col-sm-6">
                        <p className="my-1">to:</p>
                        <DatePicker
                            dropdownMode={"scroll"}
                            selected={context.state.endEventDate}
                            selectsEnd
                            startDate={context.state.startEventDate}
                            endDate={context.state.endEventDate}
                            onChange={handleChangeEnd}
                            placeholderText="Click to select end date"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>
                <Autocomplete />
            </div>
        </div>
    );
};

export default JumbotronSearch;
