import user from '../models/user.model.js'

export default {
  async getUsers() {
    try {
      const data = await user.getUsers()
      return data
    } catch (error) {
      throw error
    }
  },

  async getUserByUserId(userId) {
    try {
      const data = await user.getUserByUserId(userId)
      return data
    } catch (error) {
      throw error
    }
  },

  async getUserByKelompokId(kelompokId) {
    try {
      const data = await user.getUserByKelompokId(kelompokId)
      return data
    } catch (error) {
      throw error
    }
  },

  async createUser(name, kelompokId, categoryOfAge, dateOfBirth) {
    try {
      const userId = `${kelompokId}${categoryOfAge}${Date.now()}`

      const data = await user.createUser(userId, name, kelompokId, categoryOfAge, dateOfBirth)
      return data
    } catch (error) {
      throw error
    }
  },

  async updateUser(id, name, kelompokId, isActive, categoryOfAge, dateOfBirth) {
    try {
      const data = await user.updateUser(id, name, kelompokId, isActive, categoryOfAge, dateOfBirth)
      return data
    } catch (error) {
      throw error
    }
  },

  async deleteUser(id) {
    try {
      const data = await user.deleteUser(id)
      return data
    } catch (error) {
      throw error
    }
  },
}
