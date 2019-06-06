import React from "react";
import "../../assets/styles/news.scss";

const News = () => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <div className="container d-flex flex-wrap">
                        <li className="breadcrumb-item">Home</li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            News
                        </li>
                    </div>
                </ol>
            </nav>
            <div className="container news-page">
                <div className="news-banner d-flex align-items-end mb-5">
                    <div className="news-search d-flex align-items-center justify-content-center">
                        <div className="col-sm-5 text-center">
                            <h1>News</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <p>
                            We specialise in providing incoming services
                            throughout Poland to individual travelers and
                            groups, we also organize business meetings,
                            conferences and incentive tours. Since 2009, when we
                            were brought to live by our mother company FLUGO
                            (1998), we’ve been offering our experience and
                            expertise in meetings, incentives, conventions as
                            well as group travels to those who decided to visit
                            Poland.
                        </p>
                        <h3>Why you should choose us?</h3>
                        <ul>
                            <li>Experience in MICE business</li>
                            <li>
                                Long experience in organizing VIP events and
                                meetings in Poland
                            </li>
                            <li>
                                Understanding Customer's corporate brand and
                                working together to achieve desired goals
                            </li>
                            <li>
                                Fresh and dedicated ideas regarding social and
                                off-site events
                            </li>
                            <li>
                                Customized programs adjusted to specific
                                requirements
                            </li>
                            <li>
                                In-depth knowledge of Poland's best
                                destinations, venues and accommodation
                            </li>
                            <li>
                                Careful selection of suppliers to fulfill our
                                Customers‘ expectations
                            </li>
                            <li>
                                Excellent relationships with our Customers and
                                vendors
                            </li>
                            <li>Dedicated and service oriented staff</li>
                            <li>
                                Exclusive team of project managers to work
                                closely with you
                            </li>
                            <li>
                                Implementation into all our programs what is
                                best in our country: Polish hospitality, Polish
                                heritage & culture, Polish cuisine, Polish
                                nature, Polish great personalities and Polish
                                products
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
