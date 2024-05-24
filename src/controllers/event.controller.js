import { errResponse, okResponse } from '../helpers/response.js'
import event from '../services/event.service.js'

export default {
  async getEvents(req, res) {
    try {
      const data = await event.getEvents()
      return okResponse(res, 'success!', data)
    } catch (error) {
      return errResponse(error, res, 'getEventController')
    }
  },

  async getEventById(req, res) {
    try {
      const { event_id } = req.params
      const data = await event.getEventById(event_id)
      return okResponse(res, 'success!', data)
    } catch (error) {
      return errResponse(error, res, 'getEventController')
    }
  },

  async createEvent(req, res) {
    try {
      const { name, date, categoryOfAge } = req.body
      await event.createEvent(name, date, categoryOfAge)
      return okResponse(res, 'success insert event!')
    } catch (error) {
      return errResponse(error, res, 'createEventController')
    }
  },

  async updateEvent(req, res) {
    try {
      const { id } = req.params
      const { name, date, categoryOfAge } = req.body
      await event.updateEvent(id, name, date, categoryOfAge)
      return okResponse(res, 'success update event!')
    } catch (error) {
      return errResponse(error, res, 'updateEventController')
    }
  },

  async deleteEvent(req, res) {
    try {
      const { id } = req.params
      await event.deleteEvent(id)
      return okResponse(res, 'success delete event!')
    } catch (error) {
      return errResponse(error, res, 'deleteEventController')
    }
  }
}


// ubah user menjadi event dan untuk create dan update fieldnya diganti dengan name, date, dan categoryOfAge