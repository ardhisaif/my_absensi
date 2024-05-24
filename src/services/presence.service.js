import presence from '../models/presence.model'

export default {
  async getPresenceByEventId(eventId) {
    try {
      const data = await presence.getPresenceByEventId(eventId)
      return data
    } catch (error) {
      throw error
    }
  },

  async createPresence(userId, eventId, status, description) {
    try {
      const data = await presence.createPresence(userId, eventId, status, description)
      return data
    } catch (error) {
      throw error
    }
  },

  async updatePresence(id, eventId, userId, status, description) {
    try {
      const data = await presence.updatePresence(id, eventId, userId, status, description)
      return data
    } catch (error) {
      throw error
    }
  },

  async deletePresence(id) {
    try {
      const data = await presence.deletePresence(id)
      return data
    } catch (error) {
      throw error
    }
  }
}