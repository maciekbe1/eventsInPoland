import React, { useContext, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withCookies } from "react-cookie";

import "./assets/styles/app.scss";

import Navbar from "./components/Navbar";
import Event from "./components/EventsPage/Event";
import PopularEvents from "./components/PopularCityEvents/PopularEvents";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
// import ProtectedRoute from "./pages/ProtectedRoute";
import EventsPage from "./pages/EventsPage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import Calendar from "./components/Calendar/Calendar";

import Context from "./context";
import reducer from "./reducer";
import Contact from "./components/Contact/Contact";
import News from "./components/News/News";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => {
    const initialState = useContext(Context);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <Context.Provider value={{ state, dispatch }}>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route
                                path="/"
                                exact
                                render={render => <HomePage {...render} />}
                            />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/news" component={News} />
                            <Route path="/about-us" component={AboutUs} />
                            <Route path="/calendar" component={Calendar} />
                            <Route
                                path="/all-events/event/:event"
                                component={Event}
                            />
                            <Route path="/all-events" component={EventsPage} />
                            <Route
                                path="/find-popular/:popularEvents"
                                component={PopularEvents}
                            />
                            <Route component={NotFound} />
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
};

export default withCookies(App);
