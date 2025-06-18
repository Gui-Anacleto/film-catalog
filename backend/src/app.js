import express from 'express';
import movieRoutes from './routes/movieRoutes.js';

const app = express();

app.use(express.json());

// Rotas
app.use('/api/movies', movieRoutes);

export default app;


