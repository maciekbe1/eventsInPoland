import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../context";
import axios from "axios";

const Autocomplete = props => {
    const context = useContext(Context);
    const { dispatch } = useContext(Context);
    const [suggestionsEventList, setSuggestionsEventList] = useState([]);
    const findEventOnChange = e => {
        axios
            .get(
                'https://b2ng.bpower2.com/index.php/restApi/events/{"pipeline":13, "details: true"}'
            )
            .then(res => {
                dispatch({ type: "EVENTS_TITLE", payload: res.data });
            });

        const value = e.target.value;
        let suggestions = [];
        dispatch({ type: "SEARCH_EVENT_BY_NAME", payload: value });
        if (value.length > 0) {
            const regexp = new RegExp(`${value}`, "i");
            if (context.state.eventsTitle) {
                suggestions = context.state.eventsTitle
                    .sort()
                    .filter(v => regexp.test(v));
            }
        }
        setSuggestionsEventList(suggestions);
    };

    const suggestionSelected = value => {
        dispatch({ type: "SEARCH_EVENT_BY_NAME", payload: value });
        setSuggestionsEventList([]);
    };

    const renderSuggestion = () => {
        if (suggestionsEventList.length === 0) {
            return null;
        } else {
            return (
                <ul className="col-sm-10 events-search-list">
                    {suggestionsEventList.map((item, index) => {
                        return (
                            <li
                                onClick={() => suggestionSelected(item)}
                                key={index}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            );
        }
    };
    const suggestionsClear = e => {
        if (context.state.startEventDate && !context.state.endEventDate) {
            e.preventDefault();
            props.valid();
        }
        setSuggestionsEventList([]);
    };
    return (
        <div className="d-flex">
            <div className="w-100">
                <input
                    value={context.state.searchEventByName}
                    onChange={findEventOnChange}
                    type="text"
                    className="form-control"
                    placeholder={props.content.text_10}
                />
                {renderSuggestion()}
            </div>
            <Link
                to={{
                    pathname: "/all-events",
                    state: {
                        eventName: context.state.searchEventByName,
                        eventStart: context.state.startEventDate,
                        eventEnd: context.state.endEventDate
                    }
                }}
                className="btn btn-primary find-events"
                onClick={suggestionsClear}
            >
                {props.content.text_11}
            </Link>
        </div>
    );
};
export default Autocomplete;
