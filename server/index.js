const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getAllHouses, createHouse, deleteHouse, updateHouse} = require('./controller')

app.get('/api/houses', getAllHouses)
app.post('/api/houses', createHouse)
app.delete('/api/movies/:id', deleteHouse)
app.put('/api/houses/:id', updateHouse)


app.listen(4004, () => console.log('We\'re in business boys: port 4004'))
