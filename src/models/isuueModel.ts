import mongoose from "mongoose";

enum Status {
    OPEN,
    IN_PROGRESS,
    CLOSED
  }

const issueSchema = new mongoose.Schema({
   title : {
    type : String,
    required : [true , "please provide a suitable title"],
    },

    description : {
      type : String,
    },
   
    status : {
        type : Status,
        default : Status.OPEN,
    },
    
    createdAt : {
        type : Date,
        default : Date.now()
    },

    updatedAt : {
        type : Date
    }

})
const Issue =  mongoose.model("issue" , issueSchema);