import React, { useState, useEffect } from "react";
import axios from "axios";
export default ({ postId }) => {
    const [comments, setComments] = useState([])
    const fetchComments = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/posts/${postId}/comments`)
            setComments(data);
        } catch (error) {
            alert("Failed to load comments data")
        }

    }
    useEffect(() => { fetchComments() }, [])

    const renderedComments = comments.map(comment => <li key={comment.id}>{comment.body}</li>)

    return <ul>
        {renderedComments}
    </ul>
}