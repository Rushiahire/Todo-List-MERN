import express from 'express';
import mongoose from "mongoose"
import userRoute from './routes/user-routes.js';
import { connection } from "./connection/connection.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/api/v1", userRoute);
connection();

mongoose
    .connect(
        "mongodb+srv://Rushi:%23Rushi9970@cluster0.yjqtfjf.mongodb.net/"
    )
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

const port = 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


