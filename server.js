import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/users', (req, res) => {
    users.push(req.body)
    res.status(201).json(req.body)
})

app.get('/', (req, res) => {
    res.send('Essa aqui é a homepage')
})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

// mandlerrafael123_db_user
// sRFPOVyjiMjy0Kl1

app.listen(3000)