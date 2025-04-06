import { Socket } from "socket.io";
import * as http from "http";

import { Server } from 'socket.io';
import { UserManager } from "./RoomManage/UserManager";

const server = http.createServer(http); ////creates an HTTP server using Node.js's http module

const io = new Server(server, { //  //creates WebSocket server (io) attached to the server.
  cors: {
    origin: "*"
  }
});

const userManager = new UserManager();

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
  userManager.addUser("randomName", socket);
  socket.on("disconnect", () => {
    console.log("user disconnected");
    userManager.removeUser(socket.id);
  })
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});