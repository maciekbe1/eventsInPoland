import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalContext from './global-context';

const GlobalState = props => {
    // const [clinicsDetails, setClinicsDetails] = useState([])
    // const [clinicsName, setClinicsName] = useState([])
    const [premiumClinics, setPremiumClinics] = useState([])
    const [premiumClinicsName, setPremiumClinicsName] = useState([])
    // const [content, setContent] = useState([])

    useEffect(() => {
        // axios.get('https://qang.bpower2.com/index.php/restApi/gwipClinics')
        // .then(res => {
        //     setClinicsName(res.data)
        // })
        axios.get('https://qang.bpower2.com/index.php/restApi/gwipClinics?details=true')
        .then(res => {
            let arrPremiumClinics = []
            let arrPremiumClinicsName = []
            res.data.forEach( clinic => {
                if(clinic["klientdata_businesstype21306_c2abvm"].value === "1"){
                    arrPremiumClinics.push(clinic)
                    arrPremiumClinicsName.push(clinic.nazwa.value)
                }
            })
            return (
                // setClinicsDetails(res.data),
                setPremiumClinics(arrPremiumClinics),
                setPremiumClinicsName(arrPremiumClinicsName)
            )
        })
    }, [])

    // console.log(premiumClinics, clinicsDetails);


    return(
        <GlobalContext.Provider
            value={{
                // clinicsDetails,
                premiumClinics,
                premiumClinicsName
            }}
        >
        {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;