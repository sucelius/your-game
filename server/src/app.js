const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {

    res.send('Main')
})

app.listen(PORT, () => {
    console.log('server working ')
})