const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const port = 3000

const db = require('./models')
const Todo = db.Todo
const User = db.User

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.send('hello world')
})
// 認證系統的路由
app.use('/users', require('./routes/user.js'))

app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`)
})