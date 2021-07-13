const {
	Router
} = require('express')
const Todo = require('../models/todo')
const router = Router()

// Getting the task list (todo list) 
router.get('/', async (req, res) => {
	try {
		const todos = await Todo.findAll()
		res.status(200).json(todos)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Server error'
		})
	}
})

// Creating a new todo element
router.post('/', async (req, res) => {
	try {
		// creating new obj and saving it in db, return Promise (saved automatically);  or Todo.build().save()
		const todo = await Todo.create({
			title: req.body.title,
			done: false
		})
		res.status(201).json({
			todo
		})

	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Server error'
		})
	}
})

// Changing (a todo element) a task when pressing the checkbox
router.put('/:id', async (req, res) => {
	try {
		// similar to findById() Pk = primary key = id; + --> Number
		const todo = await Todo.findByPk(+req.params.id)
		todo.done = req.body.done
		await todo.save()
		res.status(200).json({
			todo
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Server error'
		})
	}
})

// Deleting a task
router.delete('/:id', async (req, res) => {
	try {
		// we could also use findByPk()
		const todos = await Todo.findAll({
			where: {
				id: +req.params.id
			}
		})
		const todo = todos[0]
		await todo.destroy() // returns Promise
		// asnwering back to client that it is deleted (204 - no content)
		res.status(204).json({})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Server error'
		})
	}
})

module.exports = router