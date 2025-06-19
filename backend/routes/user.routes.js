import express from 'express';
import { askToAssistant, getCurrentUser, updateAssistant } from '../controllers/user.controller.js';
import isAuth from "../middlewares/isAuth.js"
import multer from 'multer';

const storage = multer.memoryStorage(); // or diskStorage() if you want to save to disk
const upload = multer({ storage });


const userRouter = express.Router()

userRouter.get("/current",isAuth,getCurrentUser)
userRouter.post("/update",isAuth,upload.single("assistantImage"),updateAssistant)
userRouter.post("/asktoassistant",isAuth,askToAssistant)
export default userRouter;
