import { classHas } from './classHas'

/**
 * @description 添加class
 * @param {HTMLElement} HTMLElement
 * @param {String} className
 */
export const classAdd = (HTMLElement: HTMLElement, className: string): void => {
  classHas(HTMLElement, className) ||
    (function () {
      const string = HTMLElement.className
      const classNew = string + ' ' + className
      HTMLElement.className = string.length > 0 ? classNew : className
    })()
}
