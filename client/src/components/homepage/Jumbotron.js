// import React, { useContext } from 'react';
import React from 'react';
import JumbotronSearch from "./JumbotronSearch";
// import AuthContext from "../context/auth-context";

const Jumbotron = () => {
    // const context = useContext(AuthContext)
    return (
        <div>
            <div className="jumbotron container-fluid">
                <div className="container">
                    <div className="jumbotron-title-wrapper">
                        <h1 className="display-4">
                            Welcome to Poland event search
                        </h1>
                        <ul>
                            <li>
                                <i className="fas fa-check"></i>
                                <p>Weather in Poland</p>
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                <p>Polish nature experience</p>
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                <p>Health resort stay</p>
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                <p>Business meetings & congresses</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*{context.isAuth*/}
            {/*    ? <JumbotronSearch />*/}
            {/*    : null*/}
            {/*}*/}
            <JumbotronSearch />
        </div>

     );
};

export default Jumbotron;