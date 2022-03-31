/**
 * @desc 验证后的错误信息
 * @param {*} fields
 */
export const validateErrMsg = (fields: Record<string | number | symbol, any>) =>
  fields[Object.keys(fields)[0]][0].message
