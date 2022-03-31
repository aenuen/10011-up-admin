/**
 * @description 秒牌
 * @param {Number} seconds 秒数
 * @returns {String}
 */
export const timeSecondBar = (seconds: number | string) => {
  let showMinutes = 0
  let showHours = 0
  let showDays = 0
  const showSeconds = ~~(+seconds % 60)
  if (seconds > 59) {
    showMinutes = ~~(+seconds / 60)
  }
  if (showMinutes > 59) {
    showHours = ~~(showMinutes / 60)
  }
  showMinutes = ~~(showMinutes % 60)
  if (showHours > 59) {
    showDays = ~~(showHours / 24)
  }
  showHours = ~~(showHours % 24)
  const showHoursStr = String(showHours).padStart(2, '0')
  const showMinutesStr = String(showMinutes).padStart(2, '0')
  const showSecondsStr = String(showSeconds).padStart(2, '0')
  const last = `${showHoursStr}:${showMinutesStr}:${showSecondsStr}`
  return showDays === 0 ? last : `${showDays}.${last}`
}
