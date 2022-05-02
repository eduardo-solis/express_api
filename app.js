// Importando express
const express = require('express')

// App de Express
const app = express()

// Indicamos que usaremos JSON
app.use(express.json())

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola mundo !!')
})

// Metodos HTTP

// GET - Para regresar información
app.get('/v1/explorers', (req, res) => {

    console.log(`Api Explorers GET ALL requests ${new Date()}`)

    const explorer1 = { id: 1, name: 'Eduardo1'}
    const explorer2 = { id: 2, name: 'Eduardo2'}
    const explorer3 = { id: 3, name: 'Eduardo3'}
    const explorer4 = { id: 4, name: 'Eduardo4'}

    const explorers = [explorer1, explorer2, explorer3, explorer4]

    // El codigo de estatus 200 indica que todo ha salido bien
    res.status(200).json(explorers)

})

// GET - Regresa información por un id
app.get('/v1/explorers/:id', (req, res) => {

    console.log(`Api Explorers GET requests ${new Date()}`)
    console.log(`Getting explorere with id ${req.params.id}`)

    const explorer = { id: 1, name: 'Eduardo' }
    res.status(200).json(explorer)

})

// POST - Crear un nuevo explorer
app.post('/v1/explorers', (req, res) => {

    console.log(`Api Explorers POST requests ${new Date()}`)

    // Parámetros del explorer
    const requestBody = req.body

    res.status(201).json({ message : 'Explorer creado'})

})

// PUT - Actualizar un explorer
app.put('/v1/explorers/:id', (req, res) => {

    console.log(`Api Explorers PUT requests ${new Date()}`)
    console.log(`Update explorere with id ${req.params.id}`)

    // Parámetros del explorer
    const requestBody = req.body

    res.status(200).json({ message : 'Explorer actualizado'})

})

// DELETE - Eliminando un explorer
app.delete('/v1/explorers/:id', (req, res) => {

    console.log(`Api Explorers DELETE requests ${new Date()}`)
    console.log(`Delete explorere with id ${req.params.id}`)

    // Parámetros del explorer
    const requestBody = req.body

    res.status(200).json({ message : 'Explorer eliminado'})

})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})