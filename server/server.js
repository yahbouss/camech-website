const express = require('express');
const cors = require('cors')
const mailer = require('nodemailer');


const app = express()
app.use(express.json)
app.use(cors())
const port = process.env.PORT || 5000

app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.post('/formSubmit', (req,res)=>{
    res.send("well recieved")
    console.log(req.body)
})


app.listen(port, ()=> console.log(`listenning on localhost:${port}`) )