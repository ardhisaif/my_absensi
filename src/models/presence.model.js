import db from '../config/connection'

export default {
  async getPresenceByEventId(eventId) {
    try {
      const sql = `
        SELECT * FROM presence WHERE event_id = $1
      `
      const data = await db.query(sql, [eventId])
      return data
    } catch (error) {
      throw error
    }
  },

  async createPresence(userId, eventId, status, description) {
    try {
      const sql = `
        INSERT INTO presence (user_id, event_id, status, description) VALUES ($1, $2, $3, $4)
      `
      const data = await db.query(sql, [userId, eventId, status, description])
      return data
    } catch (error) {
      throw error
    }
  },

  async updatePresence(id, userId, eventId, status, description) {
    try {
      const sql = `
        UPDATE presence SET user_id = $1, event_id = $2, status = $3, description = $4 WHERE id = $5
      `
      const data = await db.query(sql, [userId, eventId, status, description, id])
      return data
    } catch (error) {
      throw error
    }
  },

  async deletePresence(id) {
    try {
      const sql = `
        DELETE FROM presence WHERE id = $1
      `
      const data = await db.query(sql, [id])
      return data
    } catch (error) {
      throw error
    }
  },
}