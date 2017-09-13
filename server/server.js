const express = require('express')
const bodyParser = require('body-parser')
const omdb = require('omdb')

const app = express()

app.use(bodyParser.json())

app.post('/search' , (req, res) => {
})

app.listen(3000, () => console.log('Listening on 3000!'))
