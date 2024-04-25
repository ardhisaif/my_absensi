import { z } from 'zod'
import { zodNumber, zodString } from '../helpers/zod.message.js'

export const registerValidator = z.object({
  username        : zodString('username').min(4, 'Username harus berisi minimal 4 karakter').refine(value => /^[a-z0-9_.]{3,16}$/.test(value), 'Check kembali format username Anda! Kombinasi 16 karakter yang diperbolehkan hanya huruf kecil, angka, titik , dan garis bawah! (contoh : user_123)'),
  referrer_id     : zodString('referrer_id').optional().default(''),
  namalengkap     : zodString('namalengkap'),
  hp              : zodString('hp').refine(value => /^(08\d{9,10})|(?:\d{10,12})$/.test(value), 'Check kembali format penulisan nomor HP, format yang diizinkan (081234xxxxxx)').optional().default(''),
  alamat          : zodString('alamat').optional().default(''),
  wilayah         : zodString('wilayah').optional().default(',,,,'),
  deviceID        : zodString('deviceId'),
  email           : zodString('email').optional(),
  isBigCap        : zodNumber('isBigCap').optional().default(0),
  password        : zodString('password').min(8).optional(),
  confirm_password: zodString('confirm_password').min(8).optional(),
})
