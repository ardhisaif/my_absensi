import db from '../config/connection.js'

export default {
  async getDesa() {
    try {
      const sql = `
        SELECT * FROM desa
      `
      const data = await db.query(sql)

      return data
    } catch (error) {
      throw error
    }
  },

  async getDesaById(id) {
    try {
      const sql = `
        SELECT * FROM desa WHERE id = $1
      `
      const data = await db.query(sql, [id])
      return data
    } catch (error) {
      throw error
    }
  },

  async createDesa(name) {
    try {
      const sql = `
        INSERT INTO desa (name) VALUES ($1)
      `
      const data = await db.query(sql, [name])
      return data
    } catch (error) {
      throw error
    }
  },

  async updateDesa(id, name) {
    try {
      const sql = `
        UPDATE desa SET name = $1 WHERE id = $2
      `
      const data = await db.query(sql, [name, id])
      return data
    } catch (error) {
      throw error
    }
  },

  async deleteDesa(id) {
    try {
      const sql = `
        DELETE FROM desa WHERE id = $1
      `
      const data = await db.query(sql, [id])
      return data
    } catch (error) {
      throw error
    }
  }
}
