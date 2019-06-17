import React from "react";
import "../../assets/styles/news.scss";
import { Link } from "react-router-dom";

const NewsPost = props => {
    const post = props.post;
    const text = post.text.slice(0, 200);
    console.log(post.id);
    return (
        <>
            <h3>{post.title}</h3>
            <p>
                {text}... <Link to={`/news/${post.id}`}>read more</Link>{" "}
            </p>
        </>
    );
};

export default NewsPost;
