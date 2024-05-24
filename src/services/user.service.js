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

  async getUserById(userID) {
    try {
      const data = await user.getUserByUserID(userID)
      return data
    } catch (error) {
      throw error
    }
  },

  async createUser(name, kelompokId, isActive, categoryOfAge, dateOfBirth) {
    try {
      const data = await user.createUser(name, kelompokId, isActive, categoryOfAge, dateOfBirth)
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
  }
}
