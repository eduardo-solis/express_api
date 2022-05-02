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

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})