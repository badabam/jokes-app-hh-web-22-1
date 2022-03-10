export default function handler(request, response) {
  const { method } = request;

  if (method === 'GET') {
    response.json({ hello: 'world' });
  } else if (method === 'POST') {
    const joke = request.body;
    response.json(joke);
  }
}
