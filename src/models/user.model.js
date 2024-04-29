import db from '../config/connection.js'

export default {
  async getUserByUserID(userID) {
    try {
      const query = `
        SELECT * FROM auth WHERE user_id = ?
      `
      const [data] = await db.query(query, [userID])
  
      const response = data[0]
      response.device_id = response.deviceId
      delete response.deviceId
      response.device_os = response.deviceOS 
      delete response.deviceOS
      
      return response
    } catch (error) {
      throw error
    }
  }
}
