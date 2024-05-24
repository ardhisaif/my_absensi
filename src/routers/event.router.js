import express from 'express'
import event from '../controllers/event.controller.js'

const router = express.Router()

router.get('/', event.getEvents)
router.get('/:id', event.getEventById)
router.post('/', event.createEvent)
router.put('/:id', event.updateEvent)
router.delete('/:id', event.deleteEvent)

export default router
