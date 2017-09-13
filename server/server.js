const express = require('express')
const bodyParser = require('body-parser')
const imdb = require('imdb-api')

const app = express()

app.use(bodyParser.json())

app.post('/search' , (req, res) => {
  const film = req.body

  
})

app.listen(3000, () => console.log('Listening on 3000!'))
