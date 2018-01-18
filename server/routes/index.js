const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));
    //todos
    app.post('/api/todos', todosController.create);
    app.get('/api/todos', todosController.list);
    // app.get('/api/todos', todosController.list_with_only_comleted)
    app.get('/api/todos/:todoId', todosController.retrieve);
    app.put('/api/todos/:todoId', todosController.update);
    app.delete('/api/todos/:todoId', todosController.destroy);
    //todoItems
    app.post('/api/todos/:todoId/items', todoItemsController.create);
    app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
    // app.get('/api/todos/:todoId/items', todoItemsController.list);
    app.delete(
        '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
    );

};