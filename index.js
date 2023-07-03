require("dotenv").config()
const http = require("http")


function requestController(){
    //Logica de nuestra funcion
    console.log("Recibimos una nueva request")
}

const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(process.env.PORT, function() {
    console.log("aplicacion Corriendo en " + PORT)
})