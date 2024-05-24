import desa from '../models/desa.model.js'

export default {
  async getDesa() {
    try {
      const data = await desa.getDesa()
      return data
    } catch (error) {
      throw error
    }
  },

  async getDesaById(id) {
    try {
      const data = await desa.getDesaById(id)
      return data
    } catch (error) {
      throw error
    }
  },

  async createDesa(name) {
    try {
      const data = await desa.createDesa(name)
      return data
    } catch (error) {
      throw error
    }
  },

  async updateDesa(id, name) {
    try {
      const data = await desa.updateDesa(id, name)
      return data
    } catch (error) {
      throw error
    }
  },

  async deleteDesa(id) {
    try {
      const data = await desa.deleteDesa(id)
      return data
    } catch (error) {
      throw error
    }
  }
}
