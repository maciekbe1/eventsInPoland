import React from 'react';

const HowItWorks = () => {
    return (
        <div className="how-it-works container">
            <div className="row">
                <div className="column col-md-4">
                    <span></span>
                    <p className="title">What is medical travel?</p>
                    <p>Medical travel is the practice of seeking medical care in a location outside of your permanent residence. It can involve long or short stays for elective treatment  or chronic care management.</p>
                    {/*<a href="#test">Browse our clinics</a>*/}
                </div>

                <div className="column col-md-4">
                    <span></span>
                    <p className="title">A curated marketplace?</p>
                    <p>Get well in Poland carefully selects which clinics and hospitals are listed on our platform. Each clinic and hospital is checked for physician expertise, accreditations and certifications, facility condition, and patient satisfaction.</p>
                    {/*<a href="#test">Browse our clinics</a>*/}
                </div>

                <div className="column col-md-4">
                    <span></span>
                    <p className="title">Not sure where to start?</p>
                    <p>Just let us know what you are looking for and our Care Team will get back to you as soon as possible.</p>
                    {/*<a href="#test">Browse our clinics</a>*/}
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;