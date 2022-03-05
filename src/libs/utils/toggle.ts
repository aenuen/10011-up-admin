import { ref } from 'vue'

/**
 * @description 切换
 * @param {boolean} [initState]
 * @param {number} [delay]
 */
export const stateToggle = (initState?:boolean, delay?:number) => {
  const state = ref(initState ?? false)
  const onToggle = (value?:boolean) => {
    setTimeout(() => {
      state.value = value ?? !state.value
    }, delay ?? 0)
  }
  return { state, onToggle }
}
