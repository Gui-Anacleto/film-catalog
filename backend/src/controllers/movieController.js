import Movie from '../models/movieModel.js';

// GET /api/movies
export const getAllMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

// GET /api/movies/:id
export const getMovieById = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).json({ error: 'Filme não encontrado' });
  res.json(movie);
};

// POST /api/movies
export const createMovie = async (req, res) => {
  const movie = new Movie(req.body);
  const saved = await movie.save();
  res.status(201).json(saved);
};

// PUT /api/movies/:id
export const updateMovie = async (req, res) => {
  const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: 'Filme não encontrado' });
  res.json(updated);
};

// DELETE /api/movies/:id
export const deleteMovie = async (req, res) => {
  const deleted = await Movie.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Filme não encontrado' });
  res.json({ message: 'Filme excluído com sucesso' });
};

