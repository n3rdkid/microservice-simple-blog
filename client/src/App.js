import React from "react";
import PostCreate from "./components/PostCreate"
import PostList from "./components/PostList"
export default () => (< div className="container">
    <h1>Create Post</h1>
    <PostCreate />
    <hr />
    <h2>Recent Post</h2>
    <PostList />
</div >);