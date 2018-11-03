var path = require('path')
var express = require('express')

var app = express()

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var port = 8080

app.use(express.static(resolve('dist')))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening at http://localhost:${port}\n`)
})
