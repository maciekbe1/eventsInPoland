import React from 'react';
import data from '../../database/doctorPatientReviews.json';

const DoctorsPatientsRewievs = () => {
    return (
        <div className="doctor-patient-reviews container-fluid">
            <div className="row">
                <h2>Doctors and Patients Reviews</h2>
                {data.map((item, index) => {
                    if (index > 2) {
                        return null
                    } else {
                        return (
                            <div className="col-xl-3 col-md-4 col-12" key={index}>
                                <p>"{item.text}"</p>
                                <img src={require(`../../assets/images/${item.img}`)} alt="" />
                                <span>{item.name}, {item.from}</span>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
}

export default DoctorsPatientsRewievs;