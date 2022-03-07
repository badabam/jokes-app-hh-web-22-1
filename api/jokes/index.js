import app from '../_app.js';
import route from '../../routes/jokes.js';

app.use('/api/jokes', route);
export default app;
