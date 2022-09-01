const http = require('http')

//createServer
const server = http.createServer((req, res) =>{
    console.log("El cliente realizo una petición")
    console.log(req.url, req.method)
    if(req.url == '/'){
        res.end('Soy la pagina de inicio')
    }
    else if(req.url == '/login'){
        res.end('Soy la pagina de login')
    }
    else {
        res.write('Hola Mundo')
        res.end("Chao")
    }
})

//listen
server.listen(8080);
