const express = require('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
app.use(morgan('dev'))
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017/dogtracker', ()=>{  
    console.log("Connected to DB")
})

app.get("/", (req, res, next)=>{
    res.send("Welcome to the dog tracker API")
})






app.listen(9000, console.log("Server running on port 9000"))