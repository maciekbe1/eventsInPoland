import React from "react";
import JumbotronSearch from "./JumbotronSearch";
// import AuthContext from "../context/auth-context";

const Jumbotron = props => {
    // const context = useContext(AuthContext)

    return (
        <div>
            <div className="jumbotron container-fluid">
                <div className="container">
                    <div className="jumbotron-title-wrapper">
                        <h1 className="display-4">{props.content.text_1}</h1>
                        <ul>
                            <li>
                                <i className="fas fa-check" />
                                <p>{props.content.text_2}</p>
                            </li>
                            <li>
                                <i className="fas fa-check" />
                                <p>{props.content.text_3}</p>
                            </li>
                            <li>
                                <i className="fas fa-check" />
                                <p>{props.content.text_4}</p>
                            </li>
                            <li>
                                <i className="fas fa-check" />
                                <p>{props.content.text_5}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*{context.isAuth*/}
            {/*    ? <JumbotronSearch />*/}
            {/*    : null*/}
            {/*}*/}
            <JumbotronSearch content={props.content} />
        </div>
    );
};

export default Jumbotron;
