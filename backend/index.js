import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();
await connectDB();

const app = express();

// Allow cookies across origins only from your frontend
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || 'https://virtual-assistant-backend-27m5.onrender.com',
  credentials: true
}));

app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.get('/health', (req, res) => res.status(200).json({ ok: true }));

app.use((err, req, res, next) => {
  console.error(err);
  const code = err.status || 500;
  res.status(code).json({ message: code === 500 ? 'Internal server error' : err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API listening on ${port}`));
