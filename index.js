const express = require(('express'))
const fs = require('fs/promises');
const PORT = process.env.PORT || 8080;

const app = express()

class Contenedor {

    constructor(fileName) {
        this.fileName = fileName
    }

    async getAll() {
        try {

            let content = await fs.readFile(`./${this.fileName}`, 'utf-8')
            let contentJson = JSON.parse(content)
            //console.log(contentJson)
            return contentJson

        } catch (error) {
            console.log(error.message)
        }
    }
}

let container = new Contenedor('productos.json')

let products = []
container.getAll().then(res => {
    products = res;
})

const serverConnected = app.listen(PORT, () => {
    console.log(`Server is up and running`)
})

app.get('/Productos', (req, res) => {
    res.send(products)
})

app.get('/productoRandom', (req, res) => {
    let randomProduct = products[Math.floor(Math.random() * products.length)];
    res.send(randomProduct)
})

serverConnected.on('error', (error) => {
    console.log(error.message)
})