import axios from '@/libs/axios'
import qs from 'qs'

interface CaptchaData {sid: string;}
export const publicCaptcha = (captchaData: CaptchaData) => axios.get(`/public/captcha?${qs.stringify(captchaData)}`)
