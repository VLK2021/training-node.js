import 'reflect-metadata';
import express from 'express';
import http from 'http';
import {createConnection} from 'typeorm';
import fileUpload from 'express-fileupload';
import SocketIO from 'socket.io';

import {mainRouter} from './routes/mainRouter';
import { socketController } from './controllers/socketController';
// import {cronRun} from './cron';


const app = express();

const server = http.createServer(app);
// @ts-ignore
const io = SocketIO(server, {cors: {origin: '*'}});


io.on('connection', (socket: any) => {
    console.log('-------------------------');
    console.log(socket.handshake.query.userId);
    console.log(socket.handshake.query.accessToken);
    console.log('-------------------------');

    socket.on('message:create', (data: any) => socketController.messageCreate(io, socket, data));

    socket.on('join_room', (data: any) => {
        socket.join(data.id);

        //one to many avoid sender
        //socket.broadcast.to(data.id).emit('user_join_room', {message: `User ${socket.id} joined room ${data.id}`})

        // EMIT TO ALL USERS IN ROOM  (INCLUDE SENDER)
        io.to(data.id).emit('user_join_room', {message: `User ${socket.id} joined room ${data.id}`});
    })

    // --------------------------------------------------------------------------------------------------

    // ONE TO ONE
    // socket.emit(event, {});

    // SEND TO ALL ONLINE USERS (INCLUDE SENDER)
    // io.emit(event, {})

    // SEND TO ALL ONLINE USERS (AVOID SENDER)
    // socket.broadcast.emit(event, {})

    // socket.join(room_id)

    // TO ROOM AVOID SENDER
    // socket.broadcast.to(room_id).emit(event, {})

    // TO ROOM INCLUDE SENDER
    // io.to(room_id).emit(event, {})

    // --------------------------------------------------------------------------------------------------

})


app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(mainRouter);

const {PORT} = process.env;
// app.listen(PORT, async () => {
//     console.log(`Server is started on PORT:${PORT}!`);
//     try {
//         const connection = await createConnection();
//         if (connection) {
//             console.log('Database connection!');
//             // cronRun()
//         }
//     } catch (err) {
//         if (err) console.log(err);
//     }
// });

server.listen(PORT, async () => {
    console.log(`Server is started on PORT:${PORT}!`);
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connection!');
            // cronRun()
        }
    } catch (err) {
        if (err) console.log(err);
    }
});



