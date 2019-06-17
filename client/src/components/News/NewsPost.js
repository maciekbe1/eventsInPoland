import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import styled from "styled-components";

const NewsPost = props => {
    const post = props.post;
    const img = parse(post.image);
    const background = img.props.src;

    return (
        <>
            <div className="card col-md-6 border-0 news-post-card">
                <div className="card-img-top">
                    <Div img={background} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.text.slice(0, 200)}...</p>
                    <Link className="btn btn-primary" to={`/news/${post.id}`}>
                        Read more
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NewsPost;

const Div = styled.div`
    height: 250px;
    width: 100%;
    background: url(${props => props.img});
    background-position: center;
    background-size: cover;
`;
