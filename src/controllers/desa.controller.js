import { errResponse, okResponse } from '../helpers/response.js'
import desa from '../services/desa.service.js'

export default {
  async getDesa(_req, res) {
    try {
      const data = await desa.getDesa()
      return okResponse(res, 'success!', data)
    } catch (error) {
      return errResponse(error, res, 'getDesaController')
    }
  },

  async getDesaById(req, res) {
    try {
      const { id } = req.params
      const data = await desa.getDesaById(id)
      return okResponse(res, 'success!', data)
    } catch (error) {
      return errResponse(error, res, 'getDesaByIdController')
    }
  },

  async createDesa(req, res) {
    try {
      const { name } = req.body
      await desa.createDesa(name)
      return okResponse(res, 'success insert desa!')
    } catch (error) {
      return errResponse(error, res, 'createDesaController')
    }
  },

  async updateDesa(req, res) {
    try {
      const { id } = req.params
      const { name } = req.body
      await desa.updateDesa(id, name)
      return okResponse(res, 'success update desa!')
    } catch (error) {
      return errResponse(error, res, 'updateDesaController')
    }
  },

  async deleteDesa(req, res) {
    try {
      const { id } = req.params
      await desa.deleteDesa(id)
      return okResponse(res, 'success delete desa!')
    } catch (error) {
      return errResponse(error, res, 'deleteDesaController')
    }
  }
}
