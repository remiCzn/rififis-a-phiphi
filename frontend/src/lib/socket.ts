import { defineStore } from "pinia";
import { io } from "socket.io-client";
import { ref } from "vue";


export const socketStore = defineStore("store", () => {
    const connected = ref(false)

    const socket = io("http://localhost:3000")

    socket.on("connect", () => {
        console.log("connected")
        connected.value = true;
    })

    socket.on("disconnect", () => {
        console.log("disconnected")
        connected.value = false;
    })

    return {
        socket,
        connected
    }
})