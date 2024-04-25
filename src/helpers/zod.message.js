import z from 'zod'

export const zodString = (key) => {
  return z.string({
    invalid_type_error: `invalid ${key} type, expected a string`,
    required_error: `${key} is required`,
  })
}

export const zodNumber = (key) => {
  return z.number({
    invalid_type_error: `invalid ${key} type, expected a number`,
    required_error: `${key} is required`,
  })
}

export const zodArray = (key, data) => {
  return z.array(data, {
    invalid_type_error: `invalid ${key} type, expected a array`,
    required_error: `${key} is required`,
  })
}

export const zodStringDate = (key, nonempty = true) => {
  return z.string().refine((value) => {
    const reg = /^(\d{4})-(\d{2})-(\d{2})$/
    if (nonempty) return reg.test(value)
    return value === '' || reg.test(value)
  }, `${key} must be a valid date, format 'yyyy-MM-dd'`)
}

export const date = (key) =>
  zodString(key).refine((value) => {
    const dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/
    return dateRegex.test(value)
  }, `column ${key} must formated as 'YYYY-MM-DD'`)

export const email = () =>
  zodString('email')
    .email('Silahkan masukan alamat email yang valid (contoh : name@company.com)')
    .min(1, 'email tidak boleh kosong')
