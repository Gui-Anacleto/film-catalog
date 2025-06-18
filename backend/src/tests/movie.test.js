import request from 'supertest'
import mongoose from 'mongoose'
import app from '../app.js'
import Movie from '../models/movieModel.js'
import dotenv from 'dotenv'

dotenv.config()

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI)
})

afterAll(async () => {
  await mongoose.connection.close()
})

afterEach(async () => {
  await Movie.deleteMany()
})

describe('Movie API', () => {
  it('deve criar um novo filme', async () => {
    const res = await request(app)
      .post('/api/movies')
      .send({
        title: "Matrix",
        status: "Quero Assistir",
        genres: ["Ficção Científica"],
        duration: "2h 49min",
        director: "Lana Wachowski",
        releaseYear: 1999,
      })

    expect(res.statusCode).toBe(201)
    expect(res.body.title).toBe('Matrix')
  })

  it('deve listar todos os filmes', async () => {
    await Movie.create({ title: 'Inception', status: "Quero Assistir", releaseYear: 2010 })

    const res = await request(app).get('/api/movies')

    expect(res.statusCode).toBe(200)
    expect(res.body.length).toBeGreaterThan(0)
  })

  it('deve buscar um filme por ID', async () => {
    const movie = await Movie.create({ title: 'Tenet', status: "Quero Assistir" })

    const res = await request(app).get(`/api/movies/${movie._id}`)

    expect(res.statusCode).toBe(200)
    expect(res.body.title).toBe('Tenet')
  })

  it('deve atualizar um filme', async () => {
    const movie = await Movie.create({ title: 'Duna', status: "Quero Assistir" })

    const res = await request(app)
      .put(`/api/movies/${movie._id}`)
      .send({ title: 'Duna: Parte 1' })

    expect(res.statusCode).toBe(200)
    expect(res.body.title).toBe('Duna: Parte 1')
  })

  it('deve deletar um filme', async () => {
    const movie = await Movie.create({ title: 'Avatar' , status: "Quero Assistir" })

    const res = await request(app).delete(`/api/movies/${movie._id}`)

    expect(res.statusCode).toBe(200)
  })
})
