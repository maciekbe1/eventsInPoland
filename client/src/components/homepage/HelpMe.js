import React from 'react';

const HelpMe = () => {
    return (
        <div className="help-me container">
            <div className="row">
                <p>How can Get Well in Poland help me?</p>
                <div className="help-me-icons w-100">
                    <ul>
                        <li className="help1">
                            <span>Choose from among the <em>highest quality clinics and hospitals</em></span>
                        </li>
                        <li className="help2">
                            <span>Learn more about the doctors <em>and your treatment options</em></span>
                        </li>
                        <li className="help3">
                            <span>Connect with the doctors</span>
                        </li>
                        <li className="help4">
                            <span>Get assistance organizing flights, <em>accommodation, aftercare, and more</em></span>
                        </li>
                        <li className="help5">
                            <span>We make sure you travel <em>and return home safely</em></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HelpMe;