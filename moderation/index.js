import express from "express";
import axios from "axios";

const app = express();

app.use(express.json())

app.post("/events", (req, res) => {
    const { type, data } = req.body;
    if (type === "CommentCreated") {
        const status = data.body.includes('orange') ? 'rejected' : 'approved';
        axios.post("http:///event-bus-srv:5001/events", {
            type: "CommentModerated",
            data: {
                id: data.id,
                body: data.body,
                postId: data.postId,
                status
            }
        })
    }
    res.json()
});



const PORT = process.env.PORT || 4003;

app.listen(PORT, () => {
    console.log(`Moderation listening at ${PORT}`)
})