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

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})