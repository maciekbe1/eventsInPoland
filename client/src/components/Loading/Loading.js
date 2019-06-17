import React from "react";

const Loading = () => {
    return (
        <div className="spinner w-100 d-flex justify-content-center">
            <div className="spinner-border text-primary my-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
