import request from 'supertest'
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import app from '../app.js'
import Content from '../models/contentModel.js'

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  const uri = mongoServer.getUri()
  await mongoose.connect(uri)
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})

afterEach(async () => {
  await Content.deleteMany()
})

describe('Content API', () => {
  it('POST /api/contents deve criar novo conteúdo', async () => {
    const newContent = {
      title: 'Dark',
      type: 'series',
      status: 'watchlist',
      genres: ['Sci-Fi']
    }

    const res = await request(app)
      .post('/api/contents')
      .send(newContent)
      .expect(201)

    expect(res.body.title).toBe('Dark')
    expect(res.body.status).toBe('watchlist')
  })

  it('GET /api/contents deve retornar conteúdos existentes', async () => {
    await Content.create({ title: 'Dark', type: 'series', status: 'watchlist' })

    const res = await request(app).get('/api/contents').expect(200)

    expect(res.body.length).toBe(1)
    expect(res.body[0].title).toBe('Dark')
  })
})
