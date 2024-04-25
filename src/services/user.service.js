import { getUserByUserID } from '../models/user.model.js'

export async function getUserByUserIDService(userID) {
  try {
    const data = await getUserByUserID(userID)
    return data
  } catch (error) {
    throw error
  }
}
