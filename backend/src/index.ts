import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { createServer } from 'node:http';
import { Server as SocketServer } from 'socket.io';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'lagos-life-backend',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/status', (_req, res) => {
  res.json({
    game: 'Lagos Life Sim',
    status: 'running',
    locations: ['Victoria Island', 'Lekki', 'Ikoyi', 'Yaba', 'Ajah', 'Ikeja'],
  });
});

io.on('connection', (socket) => {
  console.log(`Player connected: ${socket.id}`);

  socket.emit('welcome', {
    message: 'Welcome to Lagos Life Sim',
    playerId: socket.id,
  });

  socket.on('join-location', (location) => {
    socket.join(location);
    socket.emit('location-joined', { location });
  });

  socket.on('chat-message', (payload) => {
    io.to(payload.location || 'global').emit('chat-message', payload);
  });

  socket.on('disconnect', () => {
    console.log(`Player disconnected: ${socket.id}`);
  });
});

const PORT = Number(process.env.PORT || 3001);
server.listen(PORT, () => {
  console.log(`🎮 Lagos Life Sim backend running on port ${PORT}`);
});

export { app, io };
