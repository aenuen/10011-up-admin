/**
 * @returns {String} 当前浏览器名称
 */
export const browserName = (): string => {
  const ua = window.navigator.userAgent
  const isExplorer = (exp: string) => {
    return ua.indexOf(exp) > -1
  }
  if (isExplorer('MSIE')) {
    return 'IE'
  } else if (isExplorer('Firefox')) {
    return 'Firefox'
  } else if (isExplorer('Chrome')) {
    return 'Chrome'
  } else if (isExplorer('Opera')) {
    return 'Opera'
  } else if (isExplorer('Safari')) {
    return 'Safari'
  } else {
    return 'Unknown'
  }
}
