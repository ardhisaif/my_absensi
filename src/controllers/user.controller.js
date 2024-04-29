import { errResponse, okResponse } from '../helpers/response.js'
import user from '../services/user.service.js'
import validate from '../validators/user.validator.js'

export default {
  async getUserByUserID(req, res) {
    try {
      const { user_id } = validate.userID.parse(req.params)
      const data = await user.getUserByUserID(user_id)
      return okResponse(res, 'success!', data)
    } catch (error) {
      return errResponse(error, res, 'registerController')
    }
  }
}

