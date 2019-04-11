import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import {IntlProvider} from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import locale_pl from 'react-intl/locale-data/pl';
import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";
import messages_pl from "./translations/pl.json";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Clinic from "./components/clinicspage/Clinic";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import './assets/styles/app.scss';
import ProtectedRoute from './components/pages/ProtectedRoute'
import AuthProvider  from './components/context/AuthContext'
import ClinicsPage from "./components/pages/ClinicsPage";
import PopularClinics from "./components/findPopularClinicProcedures/PopularClinics"
import NotFound from './components/pages/NotFound'
import GlobalState from './components/context/GlobalState';
import RegisterPage from "./components/pages/RegisterPage";

addLocaleData([...locale_en, ...locale_de, ...locale_pl]);

class App extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };

    state = {
        language: '',
        authenticated: false
    };

    componentWillMount() {
        const { cookies } = this.props;
        if (cookies.get('getWellLang')) {
            this.setState({
                language: cookies.get('getWellLang')
            })
        } else {
            cookies.set('getWellLang', 'en', { path: '/' });
        }
    }

    changeLanguage = (lang) => {
        const { cookies } = this.props;
        cookies.set('getWellLang', lang, { path: '/' });
        this.setState({
            language: lang
        })
    };

    render() {
        const availableLanguages = [ 'en', 'de', 'pl'];

        const messages = {
            'de': messages_de,
            'en': messages_en,
            'pl': messages_pl
        };

        return (
            <IntlProvider locale={this.state.language} messages={messages[this.state.language]}>
                <div className="App">
                    <AuthProvider>
                        <GlobalState>
                            <BrowserRouter>
                                <div>
                                    <Navbar
                                        languages={availableLanguages}
                                        changeLanguage={this.changeLanguage}
                                        language={this.state.language}/>
                                    <Switch>
                                        <Route path="/" exact
                                            render={(render) => (<Homepage {...render}
                                            languages={availableLanguages}
                                            changeLanguage={this.changeLanguage}
                                            language={this.state.language} />
                                        )}/>
                                        <Route path="/register" component={RegisterPage}/>
                                        <ProtectedRoute path="/all-clinics/clinic/:clinic" component={Clinic} />
                                        <ProtectedRoute path="/all-clinics" component={ClinicsPage} />
                                        <ProtectedRoute path="/find-popular/clinic-premium/:clinic" component={Clinic}/>
                                        <ProtectedRoute path="/find-popular/:popularClinics" component={PopularClinics}/>
                                        <Route component={NotFound} />
                                    </Switch>
                                    <Footer changeLanguage={this.changeLanguage} />
                                </div>
                            </BrowserRouter>
                        </GlobalState>
                    </AuthProvider>
                </div>
            </IntlProvider>
        );
    }
}

export default withCookies(App)
