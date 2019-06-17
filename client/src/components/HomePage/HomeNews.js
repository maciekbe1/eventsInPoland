import React, { useEffect, useState } from "react";
import { getNewsBpower } from "../../api/api";
import HomeNewsPost from "./HomeNewsPost";

export default function HomeNews() {
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

    if (!news) {
        return null;
    } else {
        return (
            <>
                {news
                    ? news.map((post, index) => {
                          return <HomeNewsPost post={post} key={index} />;
                      })
                    : null}
            </>
        );
    }
}
