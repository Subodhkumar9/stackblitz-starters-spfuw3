import mongoose from "mongoose"

const subTodoSchema = new mongoose.Schema(
  {
    content:{
      type:String,
      required: true
    },
    complete:{
      type: Boolean,
      default: fasle
    },
    createdBy:{
      type: mongoose.Schema.Type.ObjectId,
      ref:"User"
    }
  },{timestamps:true}
)

export const SubTodo = mongoose.model("SubTodo", subTodoSchema)


