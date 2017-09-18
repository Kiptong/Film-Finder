const express = require('express')
const bodyParser = require('body-parser')
const omdb = require('omdb')

const app = express()

app.use(bodyParser.json())

app.post('/search/:term' , (req, res) => {
  omdb.search(req.params.term, (error, movies) => {
    if (error) {
      return console.log(error)
    }
    if (movies.length > 1) {
      res.send(movies)
    }
  })
})

app.listen(3000, () => console.log('Listening on 3000!'))
