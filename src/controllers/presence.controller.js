import { errResponse, okResponse } from '../helpers/response.js'
import presence from '../services/presence.service.js'

export default {
  async getPresenceByEventId(req, res) {
    try {
      const { event_id } = req.params
      const data = await presence.getPresenceByEventId(event_id)
      return okResponse(res, 'success!', data)
    } catch (error) {
      return errResponse(error, res, 'getPresenceByEventIdController')
    }
  },

  async createPresence(req, res) {
    try {
      const { userId, eventId, status, description } = req.body
      await presence.createPresence(userId, eventId, status, description)
      return okResponse(res, 'success insert presence!')
    } catch (error) {
      return errResponse(error, res, 'createPresenceController')
    }
  },

  async updatePresence(req, res) {
    try {
      const { id } = req.params
      const { eventId, userId, status, description } = req.body
      await presence.updatePresence(id, eventId, userId, status, description)
      return okResponse(res, 'success update presence!')
    } catch (error) {
      return errResponse(error, res, 'updatePresenceController')
    }
  },

  async deletePresence(req, res) {
    try {
      const { id } = req.params
      await presence.deletePresence(id)
      return okResponse(res, 'success delete presence!')
    } catch (error) {
      return errResponse(error, res, 'deletePresenceController')
    }
  }
}