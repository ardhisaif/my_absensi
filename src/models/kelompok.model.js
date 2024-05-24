import db from '../config/connection.js'

export default {
  async getKelompok() {
    try {
      const sql = `
        SELECT * FROM kelompok
      `
      const data = await db.query(sql)
      console.log(data)

      return data
    } catch (error) {
      throw error
    }
  },

  async getKelompokById(id) {
    try {
      const sql = `
        SELECT * FROM kelompok WHERE id = $1
      `
      const data = await db.query(sql, [id])
      return data
    } catch (error) {
      throw error
    }
  },

  async createKelompok(name, desaId) {
    try {
      const sql = `
        INSERT INTO kelompok (name, desa_id) VALUES ($1, $2)
      `
      const data = await db.query(sql, [name, desaId])
      return data
    } catch (error) {
      throw error
    }
  },

  async updateKelompok(id, name, desaId) {
    try {
      const sql = `
        UPDATE kelompok SET name = $1 desa_id = $2 WHERE id = $3
      `
      const data = await db.query(sql, [name, desaId, id])
      return data
    } catch (error) {
      throw error
    }
  },

  async deleteKelompok(id) {
    try {
      const sql = `
        DELETE FROM kelompok WHERE id = $1
      `
      const data = await db.query(sql, [id])
      return data
    } catch (error) {
      throw error
    }
  }
}
