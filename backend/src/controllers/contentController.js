import Content from '../models/contentModel.js'

export const getAllContent = async (req, res) => {
  try {
    const items = await Content.find()
    res.json(items)
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar conteúdos', error: error.message })
  }
}

export const addContent = async (req, res) => {
  try {
    const newContent = new Content(req.body)
    const saved = await newContent.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(400).json({ message: 'Erro ao adicionar conteúdo', error: error.message })
  }
}

