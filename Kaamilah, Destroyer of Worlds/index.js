'use strict'

let express = require('express')
let app = express()
let mainRouter = require('./mainRouter')

app.use(mainRouter)

let port = process.env.PORT || 3000

app.listen(port)

console.log('Express server running on port', port)
