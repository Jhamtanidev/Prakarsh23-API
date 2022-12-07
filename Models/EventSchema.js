const  mongoose = require("mongoose");

const Schema = mongoose.Schema

const EventSchema = new Schema({
    EID:{
        type:mongoose.isValidObjectId,
        
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:URL

    },
    video:{
        type:URL

    },
    rounds:{
        round1:{
            description:{
                type:String
            }
        },
        round2:{
            discription:{
                type:String

            }
           
        }
    }
    
    
})