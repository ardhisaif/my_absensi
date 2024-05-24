import db from '../config/connection.js'

export default {
  async getUsers() {
    try {
      const sql = `
        SELECT * FROM user 
      `
      const data = await db.query(query)
      return data
    } catch (error) {
      throw error
    }
  },

  async getUserByUserID(user_id) {
    try {
      const sql = `
        SELECT * FROM user WHERE id = $1
      `
      const data = await db.query(sql, [user_id])
      return data
    } catch (error) {
      throw error
    }
  },

  async createUser(name, kelompokId, isActive, categoryOfAge, dateOfBirth) {
    try {
      const sql = `
        INSERT INTO user (name, kelompok_id, is_active, category_of_age, date_of_birth) VALUES ($1, $2, $3, $4, $5)
      `
      const data = await db.query(sql, [name, kelompokId, isActive, categoryOfAge, dateOfBirth])
      return data
    } catch (error) {
      throw error
    }
  },

  async updateUser(id, name, kelompokId, isActive, categoryOfAge, dateOfBirth) {
    try {
      const sql = `
        UPDATE user SET name = $1, kelompok_id = $2, is_active = $3, category_of_age = $4, date_of_birth = $5 WHERE id = $6
      `
      const data = await db.query(sql, [name, kelompokId, isActive, categoryOfAge, dateOfBirth, id])
      return data
    } catch (error) {
      throw error
    }
  },

  async deleteUser(id) {
    try {
      const sql = `
        DELETE FROM user WHERE id = $1
      `
      const data = await db.query(sql, [id])
      return data
    } catch (error) {
      throw error
    }
  }
  
}
