import Content from '../models/contentModel.js'

// GET /api/contents
export const getAllContent = async (req, res) => {
  const items = await Content.find()
  res.json(items)
}

// POST /api/contents
export const addContent = async (req, res) => {
  const newContent = new Content(req.body)
  const saved = await newContent.save()
  res.status(201).json(saved)
}
