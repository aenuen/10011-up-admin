import router from '@/router'
export const routerUtils = () => {
  const goToPath = (path:string, query = {}) => {
    router.push({ path, query }).then()
  }
  return {
    goToPath
  }
}
