import express from 'express'
import * as controller from '../controller/index.js'
import upload from '../middleware/multer.js'

const router = express.Router()

// @route POST /upload
// @desc upload file
// @access Public
router.post('/upload', upload, controller.addItem)

// @route GET /upload
// @desc GET file
// @access Public
router.get('/upload', upload, controller.getItem)

// @route GET /pagination
// @desc Pagination file
// @access Public
router.get('/pagination', upload, controller.paginationPost)

export default router
