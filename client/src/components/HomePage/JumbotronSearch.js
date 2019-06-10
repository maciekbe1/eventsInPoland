import React, { useContext, useState } from "react";
import Context from "../../context";
import Autocomplete from "./Autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const JumbotronSearch = props => {
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
            <div className="container col-xl-7 col-lg-8 col-md-8 text-center">
                <h2>{props.content.text_6}</h2>
                <div className="row mb-3">
                    <div className="col-lg-4">
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
                            placeholderText={props.content.text_7}
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="col-lg-4">
                        <p className="mb-0">{props.content.text_9}</p>
                    </div>
                    <div className="col-lg-4">
                        {/* <p className="my-1">to:</p> */}
                        <DatePicker
                            dropdownMode={"scroll"}
                            selected={context.state.endEventDate}
                            selectsEnd
                            startDate={context.state.startEventDate}
                            endDate={context.state.endEventDate}
                            onChange={handleChangeEnd}
                            minDate={new Date()}
                            placeholderText={props.content.text_8}
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
                <Autocomplete valid={validHandler} content={props.content} />
            </div>
        </div>
    );
};

export default JumbotronSearch;
