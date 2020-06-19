import React, { useState } from "react";
import axios from "axios";

export default () => {
    const [title, setTitle] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:4000/posts", { title });
            console.log(data)
        } catch (e) {
            console.error("Error occured while adding comment")
        }
        setTitle('');
    }
    return <div className="">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input value={title} className="form-control" type='text' name="title" onChange={e => setTitle(e.target.value)} />
            </div>
            <div><button className="btn btn-primary">Submit</button></div>
        </form>
    </div>
}