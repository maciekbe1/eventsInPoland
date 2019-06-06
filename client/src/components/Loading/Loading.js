import React from "react";

const Loading = () => {
    return (
        <div className="spinner w-100 d-flex justify-content-center m-5">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
