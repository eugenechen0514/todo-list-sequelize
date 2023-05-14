const express = require('express')
const app = express()
const db = require('./models')
const Todo = db.Todo;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/todos', (req, res, next) => {
    Todo.findAll({})
        .then((todos) => {
            res.send({todos})
        })
        .catch(next)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})