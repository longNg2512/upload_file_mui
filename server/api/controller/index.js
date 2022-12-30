import { itemModel } from '../model/index.js'

// @route POST /upload
// @desc upload file
// @access Public
export const addItem = async (req, res) => {
    try {
        const name = req.body.name
        const file = req.files
        const newFile = []
        for (let i = 0; i < file.length; i++) {
            const fileUrl = `http://localhost:${process.env.PORT}/${file[i].filename}`
            newFile.push(fileUrl)
        }
        await itemModel.create({
            name: name,
            files: newFile
        })
        res.status(201).json({
            success: true,
            message: 'Create item successfully !!!'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error !!!'
        })
    }
}

// @route GET /upload
// @desc GET file
// @access Public
export const getItem = async (req, res) => {
    try {
        const listData = await itemModel.find()
        res.json({ success: true, listData })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error !!!'
        })
    }
}

// @route GET /pagination
// @desc Pagination file
// @access Public
export const paginationPost = async (req, res) => {
    const activePage = parseInt(req.query.activePage)
    const limit = parseInt(req.query.limit)
    const skip = (activePage - 1) * limit
    try {
        const totalItem = await itemModel.countDocuments()
        const totalPage = Math.ceil(totalItem / limit)
        const listPost = await itemModel.find().skip(skip).limit(limit)
        res.json({
            success: true,
            message: 'Pagination post successfully !!!',
            listPost,
            activePage,
            totalPage
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error !!!'
        })
    }
}
