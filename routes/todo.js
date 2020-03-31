const express = require('express')
const router = express.Router()

const db = require('../models')
const Todo = db.Todo
const User = db.User

const { authenticated } = require('../config/auth.js')

router.get('/', authenticated, (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
router.get('/new', authenticated, (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
router.get('/:id', authenticated, (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
router.post('/', authenticated, (req, res) => {
  res.send('新增一筆  Todo')
})

// 修改 Todo 頁面
router.get('/:id/edit', authenticated, (req, res) => {
  res.send('修改 Todo 頁面')
})

// 修改 Todo
router.put('/:id', authenticated, (req, res) => {
  res.send('修改 Todo')
})

// 刪除 Todo
router.delete('/:id/delete', authenticated, (req, res) => {
  res.send('刪除 Todo')
})

module.exports = router