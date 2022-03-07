// noinspection JSUnresolvedFunction

import Cookies from 'js-cookie'

const TokenKey = 'AdminToken'
export const getToken = () => Cookies.get(TokenKey) || ''
export const setToken = (token:string) => Cookies.set(TokenKey, token)
export const removeToken = () => Cookies.remove(TokenKey)
