const express = require('express')
const flash = require('connect-flash')
const session = require('express-session')
const app = express()
const db = require('./models')
const Todo = db.Todo;
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(session({
	secret: 'ThisIsSecret',
	resave: false,
	saveUninitialized: false
}))
app.use(flash())

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/todos', (req, res, next) => {
    return Todo.findAll({
        attributes: ['id', 'name', 'isComplete'],
        raw: true        
    })
        .then((todos) => {
            console.log(todos)
            res.render('todos', {todos, message: req.flash('success')})
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
        .then(() => {
            req.flash('success', '新增成功!')
            return res.redirect('/todos')
        })
})

app.get('/todos/:id', (req, res, next) => {
    const id = req.params.id
    return Todo.findByPk(id, {
        attributes: ['id', 'name', 'isComplete'],
        raw: true
    })
        .then((todo) =>  res.render('todo', {todo}))
})

app.get('/todos/:id/edit', (req, res) => {
    const id = req.params.id
    return Todo.findByPk(id, {
        attributes: ['id', 'name', 'isComplete'],
        raw: true
    })
        .then((todo) => res.render('edit', {todo}))
})

app.put('/todos/:id', (req, res) => {
    const body = req.body
    console.log(req.body)
    const {name, isComplete} = body
    const id = req.params.id
    console.log(req.body)
    return Todo.update({name, isComplete: isComplete === 'completed'}, {where: {id}})
            .then((todo) => {
                req.flash('success', '俢改成功!')
                return res.redirect('/todos')
            })
})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id
    return Todo.destroy({where: {id}})
        .then(() => {
            req.flash('success', '刪除成功!')
            return res.redirect('/todos')
        })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})