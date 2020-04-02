const express = require('express')
const routes = require('./routes')

const url = new URL('https://127.0.0.1:3333/')

const cors = require('cors')  


const app = express()

app.use(cors())

app.use(express.json())
app.use(routes)

app.listen(url.port, () => {
    console.log(`Server running at ${url.href}`)
})
