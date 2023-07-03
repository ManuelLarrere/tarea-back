const http = require("http")


function requestController(){
    //Logica de nuestra funcion
    console.log("Recibimos una nueva request")
}

const server = http.createServer(requestController)

server.listen(4000)