import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())


app.get("/posts", (req, res) => { })

app.post("/events", (req, res) => {

})

const port = process.env.PORT || 5002;

app.listen(port, () => {
    console.log(`Query service is listening at ${port}`);
})