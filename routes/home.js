const express = require('express')
const router = express.Router()

const db = require('../models')
const Todo = db.Todo
const User = db.User

const { authenticated } = require('../config/auth.js')

router.get('/', authenticated, (req, res) => {
  res.send('show all todos')
})

module.exports = router