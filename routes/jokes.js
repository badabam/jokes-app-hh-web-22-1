import express from 'express';
import Joke from '../models/Joke.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const jokes = await Joke.find().populate('author', 'name -_id');
    res.json(jokes);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const joke = await Joke.findById(id);
    res.json(joke);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const joke = await Joke.create(req.body);
    res.json(joke);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Joke.findByIdAndUpdate(id, req.body);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const joke = await Joke.findByIdAndDelete(id);
    if (joke) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    next(error);
  }
});

export default router;
