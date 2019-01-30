const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = mongoose.model('Todo');

exports.addNewTodo = (req, res) => {
    let newTodo = new Todo(req.body);
    console.log("todo: ", req.body);
    newTodo.save((err, todo) => {
        if (err) {
            res.send(err);
        }
        res.json(todo);
    });
};

exports.getTodos = (req, res) => {
    Todo.find({}, (err, todo) => {
        if (err) {
            res.send(err);
        }
        res.json(todo);
    });
};

exports.getTodoWithID = (req, res) => {
    Todo.findById(req.params.todoId, (err, todo) => {
        if (err) {
            res.send(err);
        }
        res.json(todo);
    });
}

exports.updateTodo = (req, res) => {
    Todo.findOneAndUpdate({ _id: req.params.todoId}, req.body, { new: true }, (err, todo) => {
        if (err) {
            res.send(err);
        }
        res.json(todo);
    })
}

exports.deleteTodo = (req, res) => {
    Todo.remove({ _id: req.params.todoId }, (err, todo) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted Todo'});
    })
}