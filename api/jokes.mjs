import dbConnect from '../lib/dbConnect.mjs';
import Joke from '../models/Joke.mjs';

await dbConnect();

export default async function handler(request, response) {
  const { method } = request;

  if (method === 'GET') {
    response.json(await Joke.find().populate('author'));
  } else if (method === 'POST') {
    const joke = await Joke.create(request.body);
    response.json(joke);
  }
}
