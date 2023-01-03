const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Robb Server 001</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>My name is Romane Orlando Robb and I created this server.</h1>')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})