import express from 'express'
const app = express()
const port = 5000
import userRouter from "./src/router/Users.js"

app.use(express.json())
app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})