import { createContext } from "react";

const Context = createContext({
    isAuth: false,
    currentUser: null,
    events: [],
    eventsTitle: [],
    searchEventByName: "",
    startEventDate: null,
    endEventDate: null
});

export default Context;
