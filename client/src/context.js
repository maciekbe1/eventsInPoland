import { createContext } from 'react'
import events from './database/events.json'

const Context = createContext({
    isAuth: false,
    login: null,
    password: null,
    token: null,
    currentUser: null,
    loading: false,
    events: events,
    loginFailure: false,
    suggestionsEventList: [],
    searchEventByName: "",
    startEventDate: null,
    endEventDate: null
});

export default Context