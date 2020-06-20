import express from "express";
import axios from "axios";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/events", (req, res) => {
    const event = req.body;
    axios.post("http://localhost:4000/events", event)
    axios.post("http://localhost:5000/events", event)
    res.send({ "status": "ok" })
})
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Event bus is listening on ${port}`)
})