const express = require('express')
const app = express()
const db = require('./models')
const Todo = db.Todo;
const { engine } = require('express-handlebars')

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/todos', (req, res, next) => {
    return Todo.findAll({
        attributes: ['id', 'name'],
        raw: true        
    })
        .then((todos) => {
            console.log(todos)
            res.render('todos', {todos})
        })
        .catch(next)
})

app.get('/todos/new', (req, res, next) => {
    return res.render('new')
})

app.post('/todos', (req, res, next) => {
    const name = req.body.name
    console.log(name)
    return Todo.create({name})
        .then(() => res.redirect('/todos'))
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})