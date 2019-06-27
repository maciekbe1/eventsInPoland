import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo/logo.png";

const LoadingBanner = () => {
    var spinnerStyle = {
        width: "50px",
        height: "50px",
        marginTop: "30px"
    };
    return (
        <Div>
            <img src={logo} alt="" />
            <div className="spinner w-100 d-flex justify-content-center">
                <div
                    style={spinnerStyle}
                    className="spinner-border text-primary"
                    role="status"
                >
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </Div>
    );
};

export default LoadingBanner;

const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background: white;
`;
