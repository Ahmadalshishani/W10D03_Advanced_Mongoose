const mongoose =require("mongoose")
/**task, description, deadline, isCompleted, and priority */

const todosSchema = new mongoose.Schema({
    task: {
        type :String
    }
    ,description : {
        type :String
    }
    ,deadline : {
        type:Number
    }
    ,isCompleted : {
        type:String , required :true
    }
    ,priority : {
        type:String
    }
})
module.exports = mongoose.model ("Todos", todosSchema)