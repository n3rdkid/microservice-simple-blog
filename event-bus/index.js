import express from "express";
import axios from "axios";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const events = []
app.post("/events", async(req, res) => {
    const event = req.body;
    events.push(event)
    console.log("EVent recieved")
    try {
        await axios.post("http://posts-clusterip-srv:4000/events", event)
        await axios.post("http://comments-srv:5000/events", event)
        await axios.post("http://query-srv:5002/events", event)
        await axios.post("http://moderation-srv:4003/events", event)
    } catch (e) {
        console.log(e);
    }
    res.send({ "status": "ok" })
})

app.get("/events", (req, res) => {
    res.send(events);
})
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Event bus is listening on ${port}`)
})