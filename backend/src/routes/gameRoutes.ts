import express from 'express';
import { gameServices } from './services';

const router = express.Router();

// Player endpoints
router.post('/players/create', (req, res) => {
  const { name, age, path } = req.body;
  const player = gameServices.player.createPlayer(name, age, path);
  res.json({ success: true, player });
});

router.get('/players/:playerId/nearby', (req, res) => {
  const { location } = req.query;
  const nearbyPlayers = gameServices.player.getNearbyPlayers(location as string);
  res.json({ success: true, nearbyPlayers });
});

// Economy endpoints
router.post('/economy/salary', (req, res) => {
  const { playerId, amount } = req.body;
  const result = gameServices.economy.paySalary(amount);
  res.json({ success: true, ...result });
});

router.post('/economy/transfer', (req, res) => {
  const { from, to, amount } = req.body;
  const result = gameServices.economy.transferMoney(from, to, amount);
  res.json({ success: result.successful, ...result });
});

router.post('/economy/expense', (req, res) => {
  const { playerId, amount, category } = req.body;
  const result = gameServices.economy.payExpense(amount, category);
  res.json({ success: true, ...result });
});

// Property endpoints
router.post('/property/buy', (req, res) => {
  const { playerId, propertyName, price } = req.body;
  const result = gameServices.property.buyProperty(playerId, propertyName, price);
  res.json({ success: true, ...result });
});

router.get('/property/portfolio', (_req, res) => {
  const portfolio = gameServices.property.getInvestmentPortfolio();
  res.json({ success: true, portfolio });
});

// Chat endpoints
router.post('/chat/send', (req, res) => {
  const { from, to, message } = req.body;
  const result = gameServices.chat.sendMessage(from, to, message);
  res.json({ success: true, ...result });
});

router.get('/chat/messages', (_req, res) => {
  const messages = gameServices.chat.getMessages();
  res.json({ success: true, messages });
});

export default router;
