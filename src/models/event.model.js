import db from '../config/connection.js'

export default {
  async getEvents() {
    try {
      const sql = `
        SELECT * FROM event 
      `
      const data = await db.query(sql)
      return data
    } catch (error) {
      throw error
    }
  },

  async getEventByEventID(event_id) {
    try {
      const sql = `
        SELECT * FROM event WHERE id = $1
      `
      const data = await db.query(sql, [event_id])
      return data
    } catch (error) {
      throw error
    }
  },

  async createEvent(name, date, categoryOfAge) {
    try {
      const sql = `
        INSERT INTO event (name, date, category_of_age) VALUES ($1, $2, $3)
      `
      const data = await db.query(sql, [name, date, categoryOfAge])
      return data
    } catch (error) {
      throw error
    }
  },

  async updateEvent(id, name, date, categoryOfAge) {
    try {
      const sql = `
        UPDATE event SET name = $1, date = $2, category_of_age = $3 WHERE id = $4
      `
      const data = await db.query(sql, [name, date, categoryOfAge, id])
      return data
    } catch (error) {
      throw error
    }
  },

  async deleteEvent(id) {
    try {
      const sql = `
        DELETE FROM event WHERE id = $1
      `
      const data = await db.query(sql, [id])
      return data
    } catch (error) {
      throw error
    }
  }
}
