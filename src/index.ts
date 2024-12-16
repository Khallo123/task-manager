import express from 'express'
import dotenv from 'dotenv'
import router from '../routes/taskRouts'

const app = express()
dotenv.config()

app.use("/tasks", router)

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("listening to port" + PORT))