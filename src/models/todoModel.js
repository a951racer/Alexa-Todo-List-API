import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TodoSchema = new Schema({
    AddedItem: {
        type: String,
        required: 'Enter the order of the meal within the day'
    },
    CreateTime: {
        type: String,
        required: 'Enter a meal name'
    }
});

mongoose.model('Todo', TodoSchema);