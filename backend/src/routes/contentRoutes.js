import express from 'express'
import { getAllContent, addContent } from '../controllers/contentController.js'

const router = express.Router()

router.get('/', getAllContent)
router.post('/', addContent)

export default router
