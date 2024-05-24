import { Router } from 'express'
import userRouter from './user.router.js'
import desaRouter from './desa.router.js'
import kelompokRouter from './kelompok.router.js'
import presenceRouter from './presence.router.js'
const router = Router()

router.use('/user', userRouter)
router.use('/desa', desaRouter)
router.use('/kelompok', kelompokRouter)
router.use('/presence', presenceRouter)

export default router
