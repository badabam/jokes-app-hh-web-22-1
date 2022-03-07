import app from '../_app.js';
import route from '../../routes/people.js';

app.use('/api/people', route);
export default app;
