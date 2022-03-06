// noinspection SpellCheckingInspection

import CryptoJs from 'crypto-js'

const secret = 'eyJfaWRfIjoiYWJib3R0IiwiZXhwIjoxNjM3NTg2MTcxLCJpYXQiOjE2Mzc0OTk3NzF9'

export const CryptoJsEncode = (string:string) => CryptoJs.AES.encrypt(string, secret).toString()

export const CryptoJsDecode = (string:string) => {
  const bytes = CryptoJs.AES.decrypt(string, secret)
  return bytes.toString(CryptoJs.enc.Utf8)
}
