import express from 'express'
import desa from '../controllers/desa.controller.js'
const router = express.Router()

router.get('/', desa.getDesa)
router.get('/:id', desa.getDesaById)
router.post('/', desa.createDesa)
router.put('/:id', desa.updateDesa)
router.delete('/:id', desa.deleteDesa)

export default router
