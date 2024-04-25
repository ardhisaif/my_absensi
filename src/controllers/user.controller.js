import { errResponse, okeResponse } from '../helpers/response.js'
import { getUserByUserIDService } from '../services/user.service.js'

export async function getUserByUserIDController(req, res) {
  try {
    const userID = req.params.user_id
    const data = await getUserByUserIDService(userID)
    return okeResponse(res, 'success!', data)
  } catch (error) {
    return errResponse(error, res, 'registerController')
  }
}
