const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const port = 3000

const db = require('./models')
const Todo = db.Todo
const User = db.User

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: false,
}))

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

app.use(passport.initialize())
app.use(passport.session())
require('./config/passport.js')(passport)

app.use(flash())
app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

// 認證系統的路由
app.use('/', require('./routes/home.js'))
app.use('/users', require('./routes/user.js'))
app.use('/todos', require('./routes/todo.js'))
app.use('/auth', require('./routes/auths.js'))

app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`)
})