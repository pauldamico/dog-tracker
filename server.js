const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const {expressjwt} = require('express-jwt')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://pauldamico:${process.env.MONGOSECRET}@cluster0.hhpaaeu.mongodb.net/dogtracker?retryWrites=true&w=majority`, ()=>{  
    console.log("Connected to DB")
})

app.get("/", (req, res, next)=>{
    res.send("Welcome to the dog tracker API")
})

app.use('/auth', require("./routes/authRouter.js"))
app.use('/api', expressjwt({secret:process.env.SECRET, algorithms:["HS256"]}))
app.use('/api/profile', require('./routes/profileRouter.js'))
app.use('/api/tracker', require('./routes/trackerRouter.js'))

app.use((err, req, res, next)=>{
console.log(err)
return res.send({errMsg:err.message})
})




app.listen(9000, console.log("Server running on port 9000"))