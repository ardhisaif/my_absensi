import { z } from 'zod'
import { zodString } from '../helpers/zod.message.js'

export default {
  userId: z.object({
    user_id: zodString('user_id'),
  }),
}
