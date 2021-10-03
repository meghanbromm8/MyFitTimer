const express = require('express')
const app = express()
const port = 3001
const mongoose = require("mongoose")
const dotenv = require("dotenv") 
const Time = require("./model.js")
const cors = require("cors")

dotenv.config()

mongoose.connect(process.env.MONGODB_URI).catch(error => console.log(error))

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/times', async(req, res) => {
    try{
        const times = await Time.find({})
        res.json(times)
    } catch(error){
        throw new Error(error)
    }


  })

  app.post('/times', async(req, res) => {
      console.log(req.body)
    try{
        const time = new Time({
            timeRecorded: req.body.timeRecorded
        })
        const createdTime = await time.save()
        res.json(createdTime)
    } catch(error){
        throw new Error(error)
    }


  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})