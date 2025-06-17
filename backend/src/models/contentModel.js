import mongoose from 'mongoose'

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['Filme', 'Série'], required: true },
  status: { type: String, enum: ['Assistido', 'Quero Assistir'], required: true },
  liked: Boolean,
  genres: [String],
  streamingService: String,
  duration: String,
}, { timestamps: true })

const Content = mongoose.model('Content', contentSchema)

export default Content
