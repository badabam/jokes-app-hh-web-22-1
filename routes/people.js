import express from 'express';
import Person from '../models/Person.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const person = await Person.findById(id);
    res.json(person);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res, next) => {
  console.log(req.params, req.query, req.body);
  try {
    const person = await Person.create(req.body);
    res.json(person);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const person = await Person.findByIdAndUpdate(id, req.body);
    if (person) {
      res.sendStatus(200);
    } else {
      res.status(400).json({ error: 'no person found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const person = await Person.findByIdAndDelete(id);
    if (person) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
