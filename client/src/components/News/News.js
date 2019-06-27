import React, { useEffect, useState, useContext } from "react";
import "../../assets/styles/news.scss";
import { getNewsBpower } from "../../api/api";
import { Link } from "react-router-dom";
import NewsPost from "./NewsPost";
import Context from "../../context";

const News = props => {
    const context = useContext(Context);
    const content = context.state.news;
    const [news, setNews] = useState();

    useEffect(() => {
        const getNews = getNewsBpower();
        getNews.then(res => {
            let arr = [];
            for (const key in res) {
                let value = res[key];
                arr.push(value);
            }
            setNews(arr);
        });
    }, []);

    if (!content) {
        return null;
    } else {
        return (
            <>
                <div className="container news-page">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-2">
                            <div className="container d-flex flex-wrap">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    {content.text_1}
                                </li>
                            </div>
                        </ol>
                    </nav>
                    <div className="news-banner d-flex align-items-end mb-5">
                        <div className="news-search d-flex align-items-center justify-content-center">
                            <div className="col-sm-5 text-center">
                                <h1>{content.text_1}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {news
                                ? news.map((post, index) => {
                                      return (
                                          <NewsPost post={post} key={index} />
                                      );
                                  })
                                : null}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default News;
