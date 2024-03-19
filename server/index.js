const io = require('socket.io')(3000,{
    cors: {
        origin: ["http://localhost:5173"],
    },
});

io.on('connection', socket => {
    console.log("New User Connected: ", socket.id);
});

io.on('disconnect', socket => {
    console.log("User Disconnected: ", socket.id);
});