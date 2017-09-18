const express = require('express')
const bodyParser = require('body-parser')
const MovieDb = require('moviedb')('2f9085506e44b48075c6783852500ab9')

const app = express()

app.use(bodyParser.json())

app.post('/search/:movie' , (req, res) => {
  MovieDb.searchMovie({ query: req.params.movie }, (error, res) => {
    if (error) {
      return console.log(error)
    }
    console.log(res)
  })
})

app.listen(3000, () => console.log('Listening on 3000!'))
