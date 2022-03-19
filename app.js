const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb+srv://sivakummitha:apurupa@cluster0.zq4gs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...');
})

app.use(express.json)

const detailsRouter = require('./routers/details')
app.use('/details', detailsRouter)

app.listen(5500, 'localhost', () => {
    console.log('server starded...');
})
