import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())



const posts = {}

app.get("/posts", (req, res) => {
    res.send(posts);
})

app.post("/events", (req, res) => {
    const { type, data } = req.body;
    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] }
    }
    if (type === 'CommentCreated') {
        const { id, content, postId } = data;
        posts[postId].comments.push(data)
    }
    console.log(posts)
    res.status(200).send("DONE")

})

const port = process.env.PORT || 5002;

app.listen(port, () => {
    console.log(`Query service is listening at ${port}`);
})