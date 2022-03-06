import { useRouter } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'

export const error401Utils = () => {
  const router = useRouter()
  const back = () => {
    router.go(-1)
  }
  return {
    back,
    ArrowLeft
  }
}
