import { Server } from "socket.io";
const userSocketMap = {};

const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("🟢 user connected:", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId !== undefined) {
        userSocketMap[userId] = socket.id;
    }

    io.emit('getOnlineUsers', Object.keys(userSocketMap))

    socket.on("disconnect", () => {
      console.log("🔴 user disconnected:", socket.id);
      delete userSocketMap[userId];
      io.emit('getOnlineUsers', Object.keys(userSocketMap))
    });
  });

  return io;
};

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
  }

export default initSocket;
