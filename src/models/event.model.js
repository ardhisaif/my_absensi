import db from '../config/connection.js'

export default {
  async getEvents() {
    try {
      const sql = `
        SELECT * FROM events 
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
        SELECT * FROM events WHERE id = $1
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
        INSERT INTO events (name, date, category_of_age) VALUES ($1, $2, $3)
      `
      const data = await db.query(sql, [name, date, categoryOfAge])
      return data
    } catch (error) {
      console.log(error);
      throw error
    }
  },

  async updateEvent(id, name, date, categoryOfAge) {
    try {
      const sql = `
        UPDATE events SET name = $1, date = $2, category_of_age = $3 WHERE id = $4
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
        DELETE FROM events WHERE id = $1
      `
      const data = await db.query(sql, [id])
      return data
    } catch (error) {
      throw error
    }
  }
}
