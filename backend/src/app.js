import express from 'express'
import cors from 'cors'
import contentRoutes from './routes/contentRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/contents', contentRoutes)

export default app
