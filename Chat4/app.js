
const express = require("express");
const app = express();
const dateTime = require("simple-datetime-formater");
const bodyParser = require("body-parser");
const chatRouter = require("./route/chatroute");
const loginRouter = require("./route/loginRoute");


const http = require("http").Server(app);


const io = require("socket.io");

const port = 5000;


app.use(bodyParser.json());


app.use("/chats", chatRouter);
app.use("/login", loginRouter);


app.use(express.static(__dirname + "/public"));


socket = io(http);


const Chat = require("./models/Chat");
const connect = require("./dbconnect");


socket.on("connection", socket => {
  console.log("user connected");

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  
  socket.on("typing", data => {
    socket.broadcast.emit("notifyTyping", {
      user: data.user,
      message: data.message
    });
  });

  
  socket.on("stopTyping", () => {
    socket.broadcast.emit("notifyStopTyping");
  });

  socket.on("chat message", function(msg) {
    console.log("message: " + msg);

    
    socket.broadcast.emit("received", { message: msg });

   
    connect.then(db => {
      console.log("connected to server");
      let chatMessage = new Chat({ message: msg, sender: "Unidentified" });

      chatMessage.save();
    });
  });
});

http.listen(port, () => {
  console.log("Running Port: " + port);
});
