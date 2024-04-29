import user from '../models/user.model.js'

export default {
  async getUserByUserID(userID) {
    try {
      const data = await user.getUserByUserID(userID)
      return data
    } catch (error) {
      throw error
    }
  }
}
