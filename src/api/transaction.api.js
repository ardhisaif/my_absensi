import axios from 'axios'

export async function createFaktur(kode, tanggal) {
  try {
    const { data } = await axios.post(
      process.env.TRANSACTION_SERVER_URL + 'createFaktur',
      new URLSearchParams({
        kode: kode,
        tanggal: tanggal,
      }),
    )

    return data
  } catch (error) {
    throw error
  }
}
