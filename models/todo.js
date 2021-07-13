const Sequelize = require('sequelize') // constructor
const sequelize = require('../utils/database') // connection

// creating model for the task list / todo
const todo = sequelize.define('Todo', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER
	},
	done: {
		type: Sequelize.BOOLEAN,
		allowNull: false
	},
	// title: Sequelize.STRING
	title: {
		type: Sequelize.STRING,
		allowNull: false
	}
	// date: {
	// 	type: Sequelize.DATE,
	// 	allowNull: false
	// }
})

module.exports = todo