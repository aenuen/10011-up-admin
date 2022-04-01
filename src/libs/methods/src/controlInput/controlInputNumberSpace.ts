/**
 * @description 控制输入：每个number个字符中间加空格
 * @param value
 * @param number
 * @returns {string}
 */
export const controlInputNumberSpace = (
  value: string,
  number: number
): string => {
  value = value.replace(/\s/g, '')
  const array = []
  const length = Math.ceil(value.length / number)
  for (let i = 0; i < length; i++)
    array.push(value.substr(i * number, parseInt(String(number))))
  return array.join(' ')
}
