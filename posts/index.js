import express from "express";
import cors from "cors";
import { randomBytes } from "crypto";
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const posts = {};

app.get("/posts", (req, res) => {
    console.log(posts);
    return res.status(200).json(posts);
})
app.post("/posts", (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id, title
    }
    res.status(201).json(posts[id]);

})

const port = process.env.PORT || 4000;
app.listen(port, (err) => {
    if (err) {
        return "Server couldn't start!"
    }
    console.log(`Server started on port ${port}`)
})