const io = require('socket.io')(3000,{
    cors: {
        origin: ["http://localhost:5173"],
    },
});

io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.broadcast.emit('user-connected', userId);
    });
    socket.on('chat-message', (roomId, username, message) => {
        socket.to(roomId).emit('chat-message', username, message);
    });
});