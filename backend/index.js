import express from "express";
import 'dotenv/config'
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

//Middleware for handling CORS Policy
app.use(cors());

//Middleware for parsing request body
app.use(express.json());

app.get("/", (req, res) => {
    console.log(req)
    return res.status(200).send("/ Route created successfully!")
})

app.use('/books', booksRoute)



//MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database connected successfully")
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on Port ${process.env.PORT}`)
        })
    })
    .catch((error) => console.log(error))
