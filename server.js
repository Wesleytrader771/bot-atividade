const { fazerCommit } = require('./bot')
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(express.json())

// permite abrir o index.html
app.use(express.static(__dirname))

const usersPath = path.join(__dirname, 'users.json')

// cria arquivo se não existir
if (!fs.existsSync(usersPath)) {
  fs.writeFileSync(usersPath, '[]')
}

// REGISTER
app.post('/register', (req, res) => {
  const { user, pass } = req.body

  const users = JSON.parse(fs.readFileSync(usersPath))

  if (users.find(u => u.user === user)) {
    return res.json({ success: false })
  }

  users.push({ user, pass })
  fs.writeFileSync(usersPath, JSON.stringify(users))

  res.json({ success: true })
})

// LOGIN
app.post('/login', (req, res) => {
  const { user, pass } = req.body

  const users = JSON.parse(fs.readFileSync(usersPath))

  const valid = users.find(u => u.user === user && u.pass === pass)

  if (valid) {
    res.json({ success: true })
  } else {
    res.json({ success: false })
  }
})

// iniciar servidor
app.listen(3000, () => {
  console.log('🔥 Sistema rodando em http://localhost:3000')
}) 

app.post('/ligar', (req, res) => {

  console.log('Bot ligado 🚀')

  global.botInterval = setInterval(() => {
    fazerCommit()
  }, 30000) // 30 segundos

  res.json({ ok: true })
})

app.post('/desligar', (req, res) => {

  clearInterval(global.botInterval)

  console.log('Bot desligado ❌')

  res.json({ ok: true })
})