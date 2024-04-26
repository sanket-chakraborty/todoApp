import mongoose, {Schema, Document} from "mongoose";

export interface Todo extends Document{
    title: string;
    description: string;
}

const TodoSchema : Schema<Todo> = new Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: [true, "You need to enter a description"]
    },
})

const TodoModel = (mongoose.models.Todo as mongoose.Model<Todo>) || (mongoose.model<Todo>("Todo", TodoSchema));

export default TodoModel;
