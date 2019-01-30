import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TodoSchema = new Schema({
    order: {
        type: Number,
        required: 'Enter the order of the meal within the day'
    },
    name: {
        type: String,
        required: 'Enter a meal name'
    }
});

mongoose.model('Todo', TodoSchema);