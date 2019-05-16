import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalContext from './global-context';

const GlobalState = props => {
    // const [eventsDetails, seteventsDetails] = useState([])
    // const [eventsName, seteventsName] = useState([])
    const [premiumevents, setPremiumevents] = useState([])
    const [premiumeventsName, setPremiumeventsName] = useState([])
    // const [content, setContent] = useState([])

    useEffect(() => {
        // axios.get('https://qang.bpower2.com/index.php/restApi/gwipevents')
        // .then(res => {
        //     seteventsName(res.data)
        // })
        axios.get('https://qang.bpower2.com/index.php/restApi/gwip-events?details=true')
        .then(res => {
            let arrPremiumevents = []
            let arrPremiumeventsName = []
            res.data.forEach( event => {
                if(event["klientdata_businesstype21306_c2abvm"].value === "1"){
                    arrPremiumevents.push(event)
                    arrPremiumeventsName.push(event.nazwa.value)
                }
            })
            return (
                // seteventsDetails(res.data),
                setPremiumevents(arrPremiumevents),
                setPremiumeventsName(arrPremiumeventsName)
            )
        })
    }, [])

    // console.log(premiumevents, eventsDetails);


    return(
        <GlobalContext.Provider
            value={{
                // eventsDetails,
                premiumevents,
                premiumeventsName
            }}
        >
        {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;