export default function reducer(state, { type, payload }) {
    switch (type) {
        case "SIGNIN_USER":
            return {
                ...state,
                isAuth: payload.isAuth,
                currentUser: payload.currentUser
            };
        case "IS_AUTH":
            return {
                ...state,
                isAuth: payload
            };
        case "CURRENT_USER":
            return {
                ...state,
                currentUser: payload
            };
        case "SIGNOUT_USER":
            return {
                ...state,
                isAuth: payload.isAuth,
                currentUser: payload.currentUser
            };
        case "GET_EVENTS":
            return {
                ...state,
                events: payload
            };
        case "EVENTS_TITLE":
            return {
                ...state,
                eventsTitle: payload
            };
        case "SEARCH_EVENT_BY_NAME":
            return {
                ...state,
                searchEventByName: payload
            };
        case "START_EVENT_DATE":
            return {
                ...state,
                startEventDate: payload
            };
        case "END_EVENT_DATE":
            return {
                ...state,
                endEventDate: payload
            };
        case "HOMEPAGE_CONTENT":
            return {
                ...state,
                homepage: payload
            };
        case "ABOUTUS_CONTENT":
            return {
                ...state,
                aboutUs: payload
            };
        case "NEWS_CONTENT":
            return {
                ...state,
                news: payload
            };
        case "CONTACT_CONTENT":
            return {
                ...state,
                contact: payload
            };
        case "FOOTER_CONTENT":
            return {
                ...state,
                footer: payload
            };
        case "NAVBAR_CONTENT":
            return {
                ...state,
                navbar: payload
            };
        case "SET_LANGUAGE":
            return {
                ...state,
                language: payload
            };
        default:
            return state;
    }
}
