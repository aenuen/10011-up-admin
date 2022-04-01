/**
 * @description 是否有指定的class
 * @param {HTMLElement} HTMLElement
 * @param {String} className
 * @returns {Boolean}
 */
export const classHas = (
  HTMLElement: HTMLElement,
  className: string
): boolean => {
  return !!HTMLElement.className.match('(\\s|^)' + className + '(\\s|$)')
}
