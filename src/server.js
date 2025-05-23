import http from "node:http"
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"


const server = http.createServer(async (request, response) => {
  await jsonBodyHandler(request, response)
  routeHandler(request, response) // Não precisa do await, pois não é assincrona
})

server.listen(3333)