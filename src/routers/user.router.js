import express from 'express'
import user from '../controllers/user.controller.js'
const router = express.Router()

router.get('/', user.getUsers)
router.get('/:id', user.getUserByUserId)
router.get('/kelompok/:id', user.getUserByKelompokId)
router.post('/', user.createUser)
router.put('/:id', user.updateUser)
router.delete('/:id', user.deleteUser)

export default router
