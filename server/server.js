const express = require('express')

// creates express
const app = express()

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Hello World!'})
})

app.listen(3001, () => {
    console.log('Server is listening on port 3001!')
})

