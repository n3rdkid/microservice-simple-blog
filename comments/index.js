import express from "express";
import cors from "cors";
import { randomBytes } from "crypto";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const commentsByPostsId = {};

app.get("/posts/:id/comments", (req, res) => {

    return res.status(200).json(commentsByPostsId[req.params.id] || []);
})
app.post("/posts/:id/comments", (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { body } = req.body;
    const comments = commentsByPostsId[req.params.id] || []
    comments.push({ id: commentId, body })
    commentsByPostsId[req.params.id] = comments;
    res.status(201).json(comments);

})

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if (err) {
        return "Server couldn't start!"
    }
    console.log(`Server started on port ${port}`)
})