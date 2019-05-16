import React from 'react'
import '../../assets/styles/skeleton.scss'

const SkeletonRow = () => {
    return (
        <div className="skeleton-row row">
            <div className="col-sm-4 skeleton-row-image">
                <div className="skeleton-img"></div>
            </div>
            <div className="col-sm-8 skeleton-row-description">
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text"></div>
                <div className="d-flex justify-content-end">
                    <div className="skeleton-button"></div>
                </div>
            </div>
        </div>
    )
};

export default SkeletonRow;