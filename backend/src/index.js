const express = require('express')
const app = express()

const routes = require('./routes')

const url = new URL('https://127.0.0.1:5000/')

app.use(express.json())
app.use(routes)

app.use(express.urlencoded({
  extended: true,
}))

app.listen(url.port, () => {
  console.log(`Server running at ${url.href} with sucess.`)
})