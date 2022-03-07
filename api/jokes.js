import dbConnect from '../lib/dbConnect';
import Joke from '../models/Joke';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET': {
      const { id } = req.params;
      if (id) {
        try {
          const joke = await Joke.findById(id);
          res.json(joke);
        } catch (error) {
          res.status(400).json(error);
        }
      } else {
        try {
          const jokes = await Joke.find().populate('author', 'name -_id');
          res.json(jokes);
        } catch (error) {
          res.status(400).json(error);
        }
      }
      break;
    }

    case 'POST': {
      try {
        const joke = await Joke.create(req.body);
        res.json(joke);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    }

    case 'PATCH': {
      const { id } = req.params;
      try {
        await Joke.findByIdAndUpdate(id, req.body);
        res.sendStatus(200);
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    }

    case 'DELETE': {
      const { id } = req.params;
      try {
        const joke = await Joke.findByIdAndDelete(id);
        if (joke) {
          res.sendStatus(200);
        } else {
          res.sendStatus(400);
        }
      } catch (error) {
        res.status(400).json(error);
      }
      break;
    }

    default:
      res.status(400).json({ success: false });
      break;
  }
}
