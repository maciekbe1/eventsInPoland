import React, { useContext, useState } from "react";
import Context from "../../context";
import Autocomplete from "./Autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const JumbotronSearch = () => {
    const context = useContext(Context);
    const { dispatch } = useContext(Context);
    const [valid, setValid] = useState(false);
    const handleChangeStart = date => {
        dispatch({ type: "START_EVENT_DATE", payload: date });
    };
    const handleChangeEnd = date => {
        dispatch({ type: "END_EVENT_DATE", payload: date });
    };
    const validHandler = () => {
        setValid(true);
    };
    return (
        <div className="jumbotron-search d-flex align-items-center container-fluid">
            <div className="container col-sm-5 text-center">
                <h2>Find an event</h2>
                <div className="row mb-3">
                    <div className="col-sm-4">
                        {/* <p className="my-1">from:</p> */}
                        <DatePicker
                            dropdownMode={"scroll"}
                            selected={context.state.startEventDate}
                            selectsStart
                            startDate={context.state.startEventDate}
                            endDate={context.state.endEventDate}
                            onChange={handleChangeStart}
                            isClearable={
                                context.state.startEventDate ? true : false
                            }
                            placeholderText="Click to select start date"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="col-sm-4">
                        <p className="mb-0">range between</p>
                    </div>
                    <div className="col-sm-4">
                        {/* <p className="my-1">to:</p> */}
                        <DatePicker
                            dropdownMode={"scroll"}
                            selected={context.state.endEventDate}
                            selectsEnd
                            startDate={context.state.startEventDate}
                            endDate={context.state.endEventDate}
                            onChange={handleChangeEnd}
                            minDate={new Date()}
                            placeholderText="Click to select end date"
                            dateFormat="dd/MM/yyyy"
                            isClearable={
                                context.state.endEventDate ? true : false
                            }
                            onBlur={() => setValid(false)}
                            className={valid ? "border-danger" : null}
                        />
                    </div>
                </div>
                <p className={valid ? "d-block text-danger" : "d-none"}>
                    Please select end date
                </p>
                <Autocomplete valid={validHandler} />
            </div>
        </div>
    );
};

export default JumbotronSearch;
