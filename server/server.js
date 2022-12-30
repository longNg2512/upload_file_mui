import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './api/router/index.js'

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('media'))
app.use(router)

dotenv.config()
const PORT = process.env.PORT
const URI = process.env.DATABASE_URL

mongoose
    .set('strictQuery', true)
    .connect(URI)
    .then(() => {
        console.log('Connected to DB !!!')
        app.listen(PORT, () => {
            console.log(`Server started on PORT ${PORT}`)
        })
    })
    .catch(error => {
        console.log('error', error)
    })
