import React, { useState, useEffect } from "react";
import axios from "axios"
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
export default () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        try {
            const { data } = await axios.get("http://localhost:5002/posts");
            console.log(data);
            setPosts(data);
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchPosts();
    }, [])
    const renderedPosts = Object.values(posts).map(post => <div key={post.id} className="card w-30 mb-5"><div className="card-body">
        <h3>{post.title}</h3>
    </div>
        <CommentList comments={post.comments} />
        <hr />
        <CommentCreate postId={post.id} />
    </div>);
    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>
}