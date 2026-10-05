import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { createServer } from 'node:http';
import { Server as SocketServer } from 'socket.io';
import gameRoutes from './routes/gameRoutes';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'lagos-life-backend',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/status', (_req: Request, res: Response) => {
  res.json({
    game: 'Lagos Life Sim',
    status: 'running',
    players_online: 2480,
    locations: ['Victoria Island', 'Lekki', 'Ikoyi', 'Yaba', 'Ajah', 'Ikeja'],
  });
});

// Game API routes
app.use('/api/game', gameRoutes);

// Socket.io real-time events
io.on('connection', (socket) => {
  console.log(`🎮 Player connected: ${socket.id}`);

  socket.emit('welcome', {
    message: 'Welcome to Lagos Life Sim',
    playerId: socket.id,
    timestamp: new Date().toISOString(),
  });

  // Player joins a location
  socket.on('join-location', (data: { playerId: string; location: string }) => {
    socket.join(data.location);
    console.log(`📍 ${data.playerId} joined ${data.location}`);
    io.to(data.location).emit('player-joined', {
      playerId: data.playerId,
      location: data.location,
      timestamp: new Date().toISOString(),
    });
  });

  // Chat message in location
  socket.on('chat-message', (data: { playerId: string; location: string; message: string }) => {
    console.log(`💬 ${data.playerId}: ${data.message}`);
    io.to(data.location).emit('chat-message', {
      playerId: data.playerId,
      message: data.message,
      timestamp: new Date().toISOString(),
    });
  });

  // Player travels
  socket.on('travel', (data: { playerId: string; from: string; to: string; transport: string }) => {
    socket.leave(data.from);
    socket.join(data.to);
    console.log(`✈️ ${data.playerId} traveled from ${data.from} to ${data.to} via ${data.transport}`);
    io.to(data.to).emit('player-arrived', {
      playerId: data.playerId,
      location: data.to,
      timestamp: new Date().toISOString(),
    });
  });

  // Player performs action
  socket.on('perform-action', (data: { playerId: string; action: string; location: string }) => {
    console.log(`🎯 ${data.playerId} performed ${data.action}`);
    io.to(data.location).emit('action-performed', {
      playerId: data.playerId,
      action: data.action,
      timestamp: new Date().toISOString(),
    });
  });

  // Money transfer
  socket.on('transfer-money', (data: { from: string; to: string; amount: number }) => {
    console.log(`💰 ${data.from} sent ₦${data.amount} to ${data.to}`);
    socket.emit('transfer-success', {
      from: data.from,
      to: data.to,
      amount: data.amount,
      timestamp: new Date().toISOString(),
    });
  });

  // Player disconnect
  socket.on('disconnect', () => {
    console.log(`❌ Player disconnected: ${socket.id}`);
  });
});

const PORT = Number(process.env.PORT || 3001);
server.listen(PORT, () => {
  console.log(`
🎮 ========================= Lagos Life Sim =========================`);
  console.log(`🎮 Backend running on http://localhost:${PORT}`);
  console.log(`🎮 Real-time socket enabled`);
  console.log(`🎮 ================================================================\n`);
});

export { app, io };
