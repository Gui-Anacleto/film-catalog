import app from './src/app.js'
import connectDB from './src/config/db.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5000

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
  })
})

