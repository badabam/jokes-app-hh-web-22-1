import express from 'express';
import dbConnect from '../lib/dbConnect';

const app = express();
app.use(express.json());
app.use(async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  await dbConnect();
  next();
});
export default app;
