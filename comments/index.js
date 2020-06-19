import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/comments", (req, res) => {

})
app.posts("/comments", (req, res) => {

})

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if (err) {
        return "Server couldn't start!"
    }
    console.log(`Server started on port ${port}`)
})