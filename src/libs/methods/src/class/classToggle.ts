import { classAdd } from './classAdd'
import { classRemove } from './classRemove'

/**
 * @description 切换增减class
 * @param {HTMLElement} HTMLElement
 * @param {String} className
 */
export const classToggle = (
  HTMLElement: HTMLElement,
  className: string
): void => {
  HTMLElement.className.indexOf(className) === -1
    ? classAdd(HTMLElement, className)
    : classRemove(HTMLElement, className)
}
