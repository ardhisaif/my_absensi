import { errResponse, okResponse } from '../helpers/response.js'
import kelompok from '../services/kelompok.service.js'

export default {
  async getKelompok(_req, res) {
    try {
      const data = await kelompok.getKelompok()
      return okResponse(res, 'success!', data)
    } catch (error) {
      return errResponse(error, res, 'getKelompokController')
    }
  },

  async getKelompokById(req, res) {
    try {
      const { id } = req.params
      const data = await kelompok.getKelompokById(id)
      return okResponse(res, 'success!', data)
    } catch (error) {
      return errResponse(error, res, 'getKelompokByIdController')
    }
  },

  async createKelompok(req, res) {
    try {
      const { name, desaId } = req.body
      await kelompok.createKelompok(name, desaId)
      return okResponse(res, 'success insert kelompok!')
    } catch (error) {
      console.log(error);
      return errResponse(error, res, 'createKelompokController')
    }
  },

  async updateKelompok(req, res) {
    try {
      const { id } = req.params
      const { name, desaId } = req.body
      await kelompok.updateKelompok(id, name, desaId)
      return okResponse(res, 'success update kelompok!')
    } catch (error) {
      return errResponse(error, res, 'updateKelompokController')
    }
  },

  async deleteKelompok(req, res) {
    try {
      const { id } = req.params
      await kelompok.deleteKelompok(id)
      return okResponse(res, 'success delete kelompok!')
    } catch (error) {
      return errResponse(error, res, 'deleteKelompokController')
    }
  }
}
