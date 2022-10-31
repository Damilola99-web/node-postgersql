const express = require('express')
const pool = require('./db')
const Router = require('./routes/todoRoutes')

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.use('/api/todos', Router)

app.use((req, res) => {
    res.status(404).json({message : "404 page not found"})
})

app.listen(PORT, () => {
    console.log('listening')
})