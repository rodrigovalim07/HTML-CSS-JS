const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, respo) => {
    console.log(req.body)
    respo.send('<h1>Parabéns</h1>')
})

app.listen(5500)