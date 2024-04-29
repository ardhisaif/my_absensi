import { errResponse, okResponse } from '../helpers/response.js'
import { getUserByUserIDService } from '../services/user.service.js'
import { idValidator } from '../validators/user.validator.js'

export async function getUserByUserIDController(req, res) {
  try {
    const { userID } = idValidator.parse({ userID: req.params.user_id })
    const data = await getUserByUserIDService(userID)
    return okResponse(res, 'success!', data)
  } catch (error) {
    return errResponse(error, res, 'registerController')
  }
}
