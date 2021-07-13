const express = require('express')
const path = require('path')
const sequelize = require('./utils/database')
const todoRoutes = require('./routes/todo')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json()) // will parse all json files
app.use('/api/todo', todoRoutes)


// middleware that returns only one file for each request
app.use((req, res, next) => {
	res.sendFile('/index.html') // missing . ??? 
})

// connecting to db
async function start() {
	try {
		// force true forces sequelize to update db, e.g. removing the date
		// await sequelize.sync({force: true})
		await sequelize.sync()
		app.listen(PORT)
	} catch (error) {
		console.log(error);
	}
}

start()




//https://stackoverflow.com/questions/36340747/error-enoent-no-such-file-or-directory-stat-public-main-html-at-error-nat