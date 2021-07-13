// constructor
const Sequelize = require('sequelize')

const keys = require('../keys')
// Schema-name and user-name in db
// const DB_NAME = 'node-todo'
// const USER_NAME = 'root'
// const PASSWORD = '12345678'
// const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
// 	host: 'localhost',
// 	dialect: 'mysql'
// })
// module.exports = sequelize


// object, initiliazing db ({}--> config obj as 4th param)
const sequelize = new Sequelize(keys.DB_NAME, keys.USER_NAME, keys.PASSWORD, {
	host: 'localhost', // host: keys.HOST
	dialect: 'mysql' // dialect: keys DIALECT
})

module.exports = sequelize