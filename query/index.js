import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(cors())



const posts = {}

const handleEvent = ({ type, data }) => {
    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] }
    }
    if (type === 'CommentCreated') {
        const { id, postId, status, body } = data;
        posts[postId].comments.push({ id, postId, status, body })
    }
    if (type === 'CommentUpdated') {
        const { id, postId, status, body } = data;
        const comment = posts[postId].comments.find(comment => comment.id === id)
        comment.status = status;
        comment.body = body;
    }
}

app.get("/posts", (req, res) => {
    res.send(posts);
})

app.post("/events", (req, res) => {
    const { type, data } = req.body;
    handleEvent(type, data);
    res.status(200).send("DONE")

})

const port = process.env.PORT || 5002;

app.listen(port, async() => {
    console.log(`Query service is listening at ${port}`);
    const { data } = await axios.get("http:///event-bus-srv:5001/events");
    for (let event of data) {
        console.log(event.type)
    }
})