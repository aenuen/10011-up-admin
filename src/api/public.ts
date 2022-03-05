import axios from '@/libs/axios'

interface CaptchaData {sid: string;}
export const publicCaptcha = (captchaData: CaptchaData) => axios.post('/public/captcha', captchaData)
