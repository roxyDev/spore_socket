const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Asegúrate de que el archivo se llame correctamente
});

io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');

    socket.on('location', (data) => {
        console.log('Ubicación recibida:', data);
        // Aquí puedes hacer lo que necesites con las coordenadas
    });

    socket.on('disconnect', () => {
        console.log('Un cliente se ha desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
