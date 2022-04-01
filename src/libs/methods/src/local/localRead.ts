export const localRead = (key: string): string =>
  localStorage.getItem(key) || ''
