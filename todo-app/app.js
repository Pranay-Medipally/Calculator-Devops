const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
    const todo = {
        id: Date.now(),
        task: req.body.task
    };
    todos.push(todo);
    res.status(201).json(todo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.json({ message: "Todo deleted" });
});

const PORT = 3031;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
