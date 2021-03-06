const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config()
const sendMailer = require('./mailer.js')

const app = express()
app.use(express.json())
app.use(cors())
const port = 3001 || process.env.PORT

app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.post('/formSubmit', (req,res)=>{
    res.send("well recieved")
    console.log(req.body)
    let message = { name: req.body.Name, email: req.body.Email, message: req.body.Message}
    sendMailer(message)

})


app.listen(port, ()=> console.log(`listenning on localhost:${port}`) )