import { z } from 'zod'
import { zodString } from '../helpers/zod.message.js'

export default {
  userID : z.object({
    user_id: zodString('user_id')
  })
  
}
