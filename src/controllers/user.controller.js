import { errResponse, okResponse } from '../helpers/response.js'
import user from '../services/user.service.js'

export default {
  async getUsers(req, res) {
    try {
      const data = await user.getUsers()
      return okResponse(res, 'success!', data)
    } catch (error) {
      return errResponse(error, res, 'getUserController')
    }
  },

  async getUserById(req, res) {
    try {
      const { user_id } = req.params
      const data = await user.getUserById(user_id)
      return okResponse(res, 'success!', data)
    } catch (error) {
      return errResponse(error, res, 'registerController')
    }
  },

  async createUser(req, res) {
    try {
      const { name, kelompokId, isActive, categoryOfAge, dateOfBirth } = req.body
      await user.createUser(name, kelompokId, isActive, categoryOfAge, dateOfBirth)
      return okResponse(res, 'success insert user!')
    } catch (error) {
      return errResponse(error, res, 'createUserController')
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params
      const { name, kelompokId, isActive, categoryOfAge, dateOfBirth } = req.body
      await user.updateUser(id, name, kelompokId, isActive, categoryOfAge, dateOfBirth)
      return okResponse(res, 'success update user!')
    } catch (error) {
      return errResponse(error, res, 'updateUserController')
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params
      await user.deleteUser(id)
      return okResponse(res, 'success delete user!')
    } catch (error) {
      return errResponse(error, res, 'deleteUserController')
    }
  }
}

