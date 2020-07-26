import React, { useState } from "react";
import axios from "axios";

export default ({ postId }) => {
    const [comment, setComment] = useState("");
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.post(`http://posts.com/posts/${postId}/comments`, { body: comment })
            setComment("")
        } catch (error) {
            alert("Error occured in submitting comment")
        }
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>New comment</label>
                <input value={comment} onChange={e => setComment(e.target.value)} className="form-control" type="text" />
            </div>
            <button className="btn btn-outline-primary">Add comment</button>
        </form>
    </div>
}