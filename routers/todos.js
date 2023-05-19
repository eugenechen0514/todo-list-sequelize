const express = require('express')
const router = express.Router()

const db = require('../models')
const Todo = db.Todo;

router.get('/', (req, res, next) => {
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

router.get('/new', (req, res, next) => {
    return res.render('new', { error: req.flash('error') })
})

router.post('/', (req, res, next) => {
	try {
		const name = req.body.name

		return Todo.create({ name })
			.then(() => {
				req.flash('success', '新增成功!')
				return res.redirect('/todos')
			})
			.catch((error) => {
				console.error(error)
				req.flash('error', '新增失敗:(')
				return res.redirect('back')
			})
	} catch (error) {
		console.error(error)
		req.flash('error', '新增失敗:(')
		return res.redirect('back')
	}
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    return Todo.findByPk(id, {
        attributes: ['id', 'name', 'isComplete'],
        raw: true
    })
        .then((todo) =>  res.render('todo', {todo}))
})

router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    return Todo.findByPk(id, {
        attributes: ['id', 'name', 'isComplete'],
        raw: true
    })
        .then((todo) => res.render('edit', {todo}))
})

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    const id = req.params.id
    return Todo.destroy({where: {id}})
        .then(() => {
            req.flash('success', '刪除成功!')
            return res.redirect('/todos')
        })
})

module.exports = router