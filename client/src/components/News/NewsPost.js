import React from "react";
import { Link } from "react-router-dom";

const NewsPost = props => {
    const post = props.post;

    console.log(post);
    return (
        <>
            <div class="card col-md-6 border-0">
                <div class="card-img-top">{post.image}</div>
                <div class="card-body">
                    <h5 class="card-title">{post.title}</h5>
                    <p class="card-text">{post.text.slice(0, 200)}...</p>
                    <Link class="btn btn-primary" to={`/news/${post.id}`}>
                        Read more
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NewsPost;
