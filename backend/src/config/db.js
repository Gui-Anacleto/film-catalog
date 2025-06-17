import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('🟢 Conectado ao MongoDB')
  } catch (error) {
    console.error('🔴 Erro ao conectar ao MongoDB:', error.message)
    process.exit(1)
  }
}

export default connectDB
