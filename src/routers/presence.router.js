import express from 'express'
import presence from '../controllers/presence.controller.js'

const router = express.Router()

router.get('/:event_id', presence.getPresenceByEventId)
router.post('/', presence.createPresence)
router.put('/:id', presence.updatePresence)
router.delete('/:id', presence.deletePresence)

export default router
