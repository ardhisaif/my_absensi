import express from 'express'
import { getUserByUserIDController } from '../controllers/user.controller.js'
const router = express.Router()

router.get('/:user_id', getUserByUserIDController)

export default router
