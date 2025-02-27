import express from 'express'
import { PORT } from './config/env.js'
import connectToMongoDB from "./database/mongoDB.js";

const app = express()

app.get('/', (req, res) => {
    res.send("This is the homepage")
})

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`)
    await connectToMongoDB()
})
