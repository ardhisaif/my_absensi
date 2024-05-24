import express from 'express'
import kelompok from '../controllers/kelompok.controller.js'

const router = express.Router()

router.get('/', kelompok.getKelompok)
router.get('/:id', kelompok.getKelompokById)
router.post('/', kelompok.createKelompok)
router.put('/:id', kelompok.updateKelompok)
router.delete('/:id', kelompok.deleteKelompok)

export default router
