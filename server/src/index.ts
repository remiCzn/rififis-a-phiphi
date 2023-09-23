import { createServer } from "http"
import { Server } from "socket.io";
import { GameState } from "./game";

const httpserver = createServer()
const io = new Server(httpserver, {
    cors: {
        origin: "*"
    }
})
const gameState = new GameState()
io.on("connection", (socket) => {
    socket.emit("message", { message: "Hello" })
})

httpserver.listen(3000)