(function() {
    var  socket  =  io();
    $("form").submit(function(e) {
        e.preventDefault(); // prevents page reloading
        socket.emit("chat message", $("#m").val());
        $("#m").val("");
    return  true;
});
})();


socket.on("chat message", function(msg) {
    console.log("message: "  +  msg);
    //broadcast message to everyone in port:5000 except yourself.
    socket.broadcast.emit("received", { message: msg  });
    });
});