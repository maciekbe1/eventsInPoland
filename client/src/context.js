import { createContext } from "react";

const Context = createContext({
    isAuth: false,
    currentUser: null,
    events: [],
    eventsTitle: [],
    searchEventByName: "",
    startEventDate: null,
    endEventDate: null,
    language: "",
    homepage: {},
    aboutUs: {},
    news: {},
    contact: {},
    footer: {},
    navbar: {}
});

export default Context;
