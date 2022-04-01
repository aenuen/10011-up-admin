import { classHas } from './classHas'

/**
 * @description 移除class
 * @param {HTMLElement} HTMLElement
 * @param {String} className
 */
export const classRemove = (
  HTMLElement: HTMLElement,
  className: string
): void => {
  classHas(HTMLElement, className) &&
    (function () {
      const array = HTMLElement.className.split(' ')
      const result: string[] = []
      Object.keys(array).forEach((key) => {
        array[+key] !== className && result.push(array[+key])
      })
      HTMLElement.className = result.join(' ')
    })()
}
