const mongoose = require("mongoose")

const timesSchema = new mongoose.Schema({
    date:{
        type:Date,
        default:Date.now
    },
    timeRecorded:{
        type:String,
        required:true
    }
})

const Time = mongoose.model("Time",timesSchema)
module.exports = Time 