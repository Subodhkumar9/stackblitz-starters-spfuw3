import mongoose from "mongoose"


const todoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true,

  },complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type: mongoose.Schema.Type.ObjectId,
    ref: "User"
  },
  subTodos:[
    {
      type:mongoose.Schems.Type.ObjectId,
      ref:"SubTodo"
    }
  ]// Arrey of sub-todos
}, {timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema);

