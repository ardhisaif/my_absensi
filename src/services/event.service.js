import event from '../models/event.model.js'

export default {
  async getEvents() {
    try {
      const data = await event.getEvents()
      return data
    } catch (error) {
      throw error
    }
  },

  async getEventById(eventID) {
    try {
      const data = await event.getEventByEventID(eventID)
      return data
    } catch (error) {
      throw error
    }
  },

  async createEvent(name, date, categoryOfAge) {
    try {
      const data = await event.createEvent(name, date, categoryOfAge)
      return data
    } catch (error) {
      throw error
    }
  },

  async updateEvent(id, name, date, categoryOfAge) {
    try {
      const data = await event.updateEvent(id, name, date, categoryOfAge)
      return data
    } catch (error) {
      throw error
    }
  },

  async deleteEvent(id) {
    try {
      const data = await event.deleteEvent(id)
      return data
    } catch (error) {
      throw error
    }
  }
}
