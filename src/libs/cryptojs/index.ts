import CryptoJs from 'crypto-js'
import { secret } from './settings'

export const CryptoJsEncode = (string:string) => CryptoJs.AES.encrypt(string, secret).toString()

export const CryptoJsDecode = (string:string) => {
  const bytes = CryptoJs.AES.decrypt(string, secret)
  return bytes.toString(CryptoJs.enc.Utf8)
}
