const express = require ('express')
const bodyParser = require ('body-parser')
const app = express()
const port = 3030

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
   })

let TVShowArr=[]

app.get('/shows', (req, res) => res.send(TVShowArr))

app.post('/shows', (req, res) => {
    TVShowArr.push(req.body)
    res.send(TVShowArr)
})

app.put('/shows', (req, res) => {
    res.send(`App Put -- ${req.body.TVShow}`)
})

app.delete('/shows', (req, res) => res.send(`App Delete -- You have deleted ${req.query.tvname}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
