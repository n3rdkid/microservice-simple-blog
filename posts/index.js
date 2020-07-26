import express from "express";
import cors from "cors";
import axios from "axios";
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
app.post("/posts/create", async(req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id,
        title
    }
    try {
        await axios.post("http://event-bus-srv:5001/events", { type: "PostCreated", data: { id, title } })
    } catch (e) {
        console.log("Failed to report error")
    }

    res.status(201).json(posts[id]);

})
app.post("/events", (req, res) => {

    console.log(`Received event : ${req.body.type}`)
    res.send("ok")
});
const port = process.env.PORT || 4000;
app.listen(port, (err) => {
    console.log("v55")
    if (err) {
        return "Server couldn't start!"
    }
    console.log(`Server started on port ${port}`)
})