import { loginRequired} from '../controllers/userController';
const todos = require('../controllers/todoController');

module.exports = function(app) {
    app.route('/todo')
        //.get(loginRequired, todos.getTodos)
        //.post(loginRequired, todos.addNewTodo);
        .get(todos.getTodos)
        .post(todos.addNewTodo);

    app.route('/todo/:todoId')
        //.get(loginRequired, todos.getTodoWithID)
        //.put(loginRequired, todos.updateTodo)
        //.delete(loginRequired, todos.deleteTodo);
        .get(todos.getTodoWithID)
        .put(todos.updateTodo)
        .delete(todos.deleteTodo);
        
//    app.param('todoId', todos.getTodoWithID);
}

