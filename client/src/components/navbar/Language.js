import React from 'react';

class LanguageNavBar extends React.Component {

    render () {
        return (
            <div className="container-fluid dropdown-menu language-dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <div className="container">
                    <ul>
                        <li>LANGUAGE & CURRENCY</li>
                        <li>
                            <select id="switch-language">
                                <option value="en" defaultValue="selected">
                                    English
                                </option>
                                <option value="de">
                                    Deutsch
                                </option>
                                <option value="fr">
                                    Français
                                </option>
                                <option value="es">
                                    Español
                                </option>
                                <option value="it">
                                    Italiano
                                </option>
                                <option value="ru">
                                    Русский
                                </option>
                                <option value="ar">
                                    العربية
                                </option>
                            </select>
                        </li>
                        <li>
                            <select id="switch-currency">
                                <option value="EUR">EUR - €</option>
                                <option value="USD">USD - $</option>
                                <option value="GBP">GBP - £</option>
                                <option value="CHF">CHF - Fr.</option>
                                <option value="CAD">CAD - C$</option>
                                <option value="AUD">AUD - A$</option>
                                <option value="THB">THB - ฿</option>
                                <option value="PLN" defaultValue="selected">PLN - zł</option>
                                <option value="BRL">BRL - R$</option>
                                <option value="MYR">MYR - RM</option>
                                <option value="HUF">HUF - Ft.</option>
                                <option value="SGD">SGD - S$</option>
                                <option value="TRY">TRY - TL</option>
                                <option value="AED">AED - د.إ</option>
                                <option value="ZAR">ZAR - R</option>
                                <option value="MXN">MXN - M$</option>
                                <option value="NZD">NZD - NZ$</option>
                                <option value="RUB">RUB - руб.</option>
                                <option value="ILS">ILS - ₪</option>
                                <option value="INR">INR - ₹</option>
                                <option value="MAD">MAD - م.</option>
                            </select>
                        </li>
                        <li><button className="btn btn-outline-info">Update</button></li>
                    </ul>
                    <button onClick={this.props.close} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default LanguageNavBar;