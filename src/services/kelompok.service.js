import kelompok from '../models/kelompok.model.js'

export default {
  async getKelompok() {
    try {
      const data = await kelompok.getKelompok()
      return data
    } catch (error) {
      throw error
    }
  },

  async getKelompokById(id) {
    try {
      const data = await kelompok.getKelompokById(id)
      return data
    } catch (error) {
      throw error
    }
  },

  async createKelompok(name, desaId) {
    try {
      const data = await kelompok.createKelompok(name, desaId)
      return data
    } catch (error) {
      throw error
    }
  },

  async updateKelompok(id, name, desaId) {
    try {
      const data = await kelompok.updateKelompok(id, name, desaId)
      return data
    } catch (error) {
      throw error
    }
  },

  async deleteKelompok(id) {
    try {
      const data = await kelompok.deleteKelompok(id)
      return data
    } catch (error) {
      throw error
    }
  }
}
