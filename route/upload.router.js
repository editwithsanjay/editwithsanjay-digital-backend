import { Router } from 'express'
import auth from '../middleware/auth.js'
import uploadImageController from '../controllers/uploadImage.controller.js'
import upload from '../middleware/multer.js'

import uploadR2Controller from '../controllers/uploadR2.controller.js'

const uploadRouter = Router()

uploadRouter.post("/upload", auth, upload.single("image"), uploadImageController)
uploadRouter.post("/upload-r2", auth, upload.single("image"), uploadR2Controller)

export default uploadRouter