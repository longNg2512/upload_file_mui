import mongoose from 'mongoose'

const fileSchema = new mongoose.Schema(
    {
        name: String,
        files: Array
    },
    { timestamps: true }
)

export const itemModel = mongoose.model('test', fileSchema)
