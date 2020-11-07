//Require the express moule
const express = require(“express”);

//create a new express application
const app = express()

//require the http module
const http = require(“http”).Server(app)

// require the socket.io module
const io = require(“socket.io”);

const port = 500;

const socket = io(http);
//create an event listener

//To listen to messages
socket.on(“connection”, (socket)=>{
console.log(“user connected”);
});

//wire up the server to listen to our port 500
http.listen(port, ()=>{
console.log(“connected to port: ”+ port)
});

