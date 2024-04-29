import { z } from 'zod'
import { zodString } from '../helpers/zod.message.js'

export const idValidator = z.object({
  userID        : zodString('user_id')
})
