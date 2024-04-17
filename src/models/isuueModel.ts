import mongoose ,{Document, Schema} from "mongoose";



enum Status {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    CLOSED = "CLOSED"
}

interface IIssue extends Document {
    title: string;
    description?: string;
    status: Status;
    author : mongoose.Schema.Types.ObjectId
    createdAt?: Date;
    updatedAt?: Date;
}

const issueSchema : Schema = new mongoose.Schema<IIssue>({
   title : {
    type : String,
    required : [true , "please provide a suitable title"],
    },

    description : {
      type : String,
    },
   
    status : {
        type : String,
        enum: Object.values(Status),
        default : Status.OPEN,
    },

    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    
    createdAt : {
        type : Date,
        default : Date.now()
    },

    updatedAt : {
        type : Date
    }

})
export const Issue =  mongoose.model<IIssue>("issue" , issueSchema);