const express = require('express')
const bodyParser = require ('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/shows', (req, res) => res.send('App Get -- You have added a TV Show'))

app.post('/shows', (req, res) => {
    console.log(req.body)
    res.send(`App Post -- ${req.body.TVShow}`)
})

app.put('/shows', (req, res) => {
    console.log(req.body)
    res.send(`App Put -- ${req.body.TVShow}`)
})

app.delete('/shows', (req, res) => res.send(`App Delete -- You have deleted ${req.query.tvname}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
