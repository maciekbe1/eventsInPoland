import React from 'react';
import Jumbotron from '../homepage/Jumbotron';
import FindPopularClinicProcedures from '../homepage/FindPopularClinicProcedures';
import DoctorsPatientsReviews from '../homepage/DoctorsPatientsReviews';
import ChooseClinic from '../homepage/ChooseClinic';
import HelpMe from '../homepage/HelpMe';
import Destination from '../homepage/Destination';
import HowItWorks from '../homepage/HowItWorks';
import '../../assets/styles/homepage.scss';
import OurPartners from "../homepage/OurPartners";

class Homepage extends React.Component {
    render() {
        return (
            <div className="homepage-wrapper">
                <Jumbotron />
                <ChooseClinic />
                <FindPopularClinicProcedures />
                <OurPartners/>
                <DoctorsPatientsReviews />
                <HelpMe />
                <Destination />
                <HowItWorks />
            </div>
        );
    }
}

export default Homepage;